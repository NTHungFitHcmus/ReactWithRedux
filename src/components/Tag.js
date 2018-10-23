import React, { Component } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroller';
import {Link} from 'react-router-dom';
import TagContainer from '../containers/tagContainer';
// import {connect} from 'react-redux';
// import {doAdd} from '../actions';

// const mapStateToProps = ({photo}) => {
    // return {
        // images: photo.images,
        // page: photo.page
    // }
// };

class Tag extends Component {
	// constructor(props){
		// super(props);
		// this.state = {
			// pageSize: 1
		// };
	// }

  // componentDidMount() {
	// const {dispatch} = this.props;
	
    // axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=058fa9973265bba81f7ad07e3254104f&extras=url_n,views,owner_name&per_page=20&page=1&tags=${this.props.match.params.tag}&format=json&nojsoncallback=1`)
      // .then(res => {
        // const images = res.data.photos.photo;
		// const pageSize = res.data.photos.pages;
        // this.setState({pageSize});
		// const data = {
			// images: images,
			// page: 1
		// };
		// console.log(this.props.page);
		// dispatch(doAdd(data));
		// console.log(this.props.page);
      // })
  // }
  
  // loadItems(props) {
        // var self = this;
		// const {dispatch} = this.props;

        // axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=058fa9973265bba81f7ad07e3254104f&extras=url_n,views,owner_name&per_page=20&page=${this.props.page}&tags=${props.match.params.tag}&format=json&nojsoncallback=1`)
			// .then(res => {
				// const images = res.data.photos.photo;
				// const data = {
					// images: images,
					// page: this.props.page + 1
				// };
				// console.log(this.props.page);
				// dispatch(doAdd(data));
            // });
    // }
	
	
  
  // UNSAFE_componentWillReceiveProps(props){
    // this.setState({
        // images: [],
		// page: 1,
		// pageSize: 1
    // })
    // this.loadItems(props)
  // }
  
	render() {
	// const photos = this.props.images ? this.props.images.map(photo => {
		// const divStyle = {
			// margin: `10px`,
			// float: `left`
		// };
		
		// return (
			// <div className="containerPhoto" style={divStyle} key={photo.id}>
				// <Link to={"/Photo/" + photo.id}>
					// <img className="photo" src={photo.url_n} width='400' height='300'/> 
					// <div className="middle">
						// <div className="text">
							// <u>Title</u>: {photo.title}<br/>
							// <u>Owner</u>: {photo.ownername}<br/>
							// <u>Views</u>: {photo.views}
						// </div>
					// </div>
				// </Link>
			// </div>
		// );
	// }) : <div>nothing</div>;
	
	// const loader = <div className="loader">Loading ...</div>;
	
    return (
		<div>
			<nav className="subnav">
			  <div className="fluid-subnav-shim">
				<div className="fluid-subnav">
				  <div className="subnav-content fluid-centered">
					<ul className="links">
					  <li className="link">
						<Link to="/"><span>Explore</span></Link>
					  </li>
					  <li className="link selected">
						<Link to="/Tag/"><span>Trending</span></Link>
					  </li>
					</ul>
				  </div>
				</div>
			  </div>
			</nav>
			<TagContainer tagName = {this.props.match.params.tag}/>
		</div>
    );
  }
}

export default Tag;