import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import {doClear, doSearch} from '../actions';

const mapStateToProps = (state) => {
    return {}
}

class Photo extends Component {
	constructor(props){
		super(props);
		this.state = {
		  infoPhoto: [],
		  url:[],
		  user:[],
		  description:[],
		  tags: []
		};
	}
	
	componentDidMount(){
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=058fa9973265bba81f7ad07e3254104f&photo_id=${this.props.match.params.id}&format=json&nojsoncallback=1`)
		.then(res => {
			const infoPhoto = res.data.photo;
			const user = infoPhoto.owner;
			const description = infoPhoto.description;
			const tags = infoPhoto.tags.tag;
			this.setState({ infoPhoto, user, description, tags });
		});
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=058fa9973265bba81f7ad07e3254104f&photo_id=${this.props.match.params.id}&format=json&nojsoncallback=1`)
		.then(res => {
			const url = res.data.sizes.size[5].source;
			this.setState({ url });
		});
	}
	
	Search(tag){
	  const {history, dispatch} = this.props;
	  dispatch(doClear());
	  dispatch(doSearch(tag));
	  if (tag !== '')
	  {
		  history.push(`/Tag/${tag}`);
	  }
	};
  
	render(){		
		const tags = this.state.tags.map(tag => {
			const divStyle = {
				margin: '5px',
				float: `left`
			};
			
			return (
				<div className="tag" style={divStyle} key={tag.id}>
						<button className="btn btn-primary" onClick={this.Search.bind(this, tag._content)}>
							<span>{tag._content}</span>
						</button>
				</div>
			);
		});	
		
		
		const divMainStyle = {
			marginTop: '50px'
		};
		return (
			<div style={divMainStyle}> 
				<img className="photo" src={this.state.url}/>			
				<div className="row" style={divMainStyle}>
					<div className="col-sm-6">
						<div>
							<img className="avatar" src={'http://farm'+this.state.user.iconfarm+'.staticflickr.com/'+this.state.user.iconserver+'/buddyicons/'+this.state.user.nsid+'.jpg'}/>
							<span style={{fontWeight: 'bold'}}>{this.state.user.username}</span>
						</div>
						<div dangerouslySetInnerHTML={{__html: this.state.description._content}}></div>
					</div>
					<div className="col-sm-6">
						<div style={{fontWeight: 'bold'}}> TAG </div>
						<div> {tags} </div>
					</div>
				</div>
			</div>	
		);
	}
}

export default withRouter(connect(mapStateToProps)(Photo));