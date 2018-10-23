import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import {Link} from 'react-router-dom';

class Explore extends Component {
	state = {
    images: [],
	page: 1,
	pageSize: 25
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=058fa9973265bba81f7ad07e3254104f&extras=url_n,views,owner_name&per_page=20&page=1&format=json&nojsoncallback=1`)
      .then(res => {
        const images = res.data.photos.photo;
        this.setState({ images });
      })
  }
  
  loadItems(page) {
        var self = this;

        axios.get(`https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=058fa9973265bba81f7ad07e3254104f&extras=url_n,views,owner_name&per_page=20&page=${this.state.page}&format=json&nojsoncallback=1`)
			.then(res => {
				const images = res.data.photos.photo;
				this.setState({ 
					images: this.state.images.concat(images),
					page: this.state.page + 1
				});
            });
    }
	render() {
	const photos = this.state.images.map(photo => {
		const divStyle = {
			margin: `10px`,
			float: `left`
		};
		
		return (
			<div className="containerPhoto" style={divStyle} key={photo.id}>
				<Link to={"/Photo/" + photo.id}>
					<img className="photo" src={photo.url_n} width='400' height='300'/> 
					<div className="middle">
						<div className="text">
							<u>Title</u>: {photo.title}<br/>
							<u>Owner</u>: {photo.ownername}<br/>
							<u>Views</u>: {photo.views}
						</div>
					</div>
				</Link>
			</div>
		);
	});	
	
	const loader = <div className="loader">Loading ...</div>;
	
    return (
		<div>
			<nav className="subnav">
			  <div className="fluid-subnav-shim">
				<div className="fluid-subnav">
				  <div className="subnav-content fluid-centered">
					<ul className="links">
					  <li className="link selected">
						<Link to="/"><span>Explore</span></Link>
					  </li>
					  <li className="link">
						<span>Trending</span>
					  </li>
					</ul>
				  </div>
				</div>
			  </div>
			</nav>
			<div style={{paddingLeft: `150px`, backgroundColor: `#ECECEC`}}>
				<InfiniteScroll
					pageStart={0}
					loadMore={this.loadItems.bind(this)}
					hasMore={this.state.page !== this.state.pageSize}
					loader={loader}>
						{photos}
				</InfiniteScroll>
			</div>
		</div>
    );
  }
}

export default Explore;