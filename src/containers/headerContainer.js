import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import {doClear, doSearch} from '../actions';

const mapStateToProps = ({search}) => {
    return {
		tag: search.tag
	}
}

class HeaderContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      wordsSearch: '',
    }
  };
  
  componentDidMount(){
     if(this.props.location.pathname.indexOf('/Tag/') >= 0){
	   const {dispatch} = this.props;
	   dispatch(doSearch(this.props.location.pathname.replace('/Tag/', '')));	  
	   this.setState({
		   wordsSearch: this.props.tag
	   })
		console.log('update '+this.props.tag);
		// this.setState({
		   // wordsSearch: this.props.tag
		// })
      }
  };
  
   // UNSAFE_componentWillReceiveProps(props){
	   // if(this.state.wordsSearch !== this.props.tag){ 
		 // console.log('set ' + this.props.tag);
	   // this.setState({
		   // wordsSearch: this.props.tag
	   // })
		
     // }
   // }
  handleChange(e){
	  console.log(e.target.value);
	const {history, dispatch} = this.props;	  
	dispatch(doSearch(e.target.value));
	this.setState({
	  wordsSearch: e.target.value
	})
  };
  
  Search(e){
	  console.log('search ' + this.props.tag);
	  e.preventDefault();
	  const {history, dispatch} = this.props;
	  dispatch(doClear());
	  // dispatch(doSearch(this.state.wordsSearch));
	  if (this.state.wordsSearch !== '')
	  {
		  history.push(`/Tag/${this.props.tag}`);
	  }
  };
  
  render() {
    return (	
	  <div style={{marginTop: '20px', width: '250px', position: 'absolute', right: '50px'}} className="input-group mb-3">
		<div className="input-group-prepend">
			<button id="btnSearch" type="button" className=" input-group-text btn btn-default" onClick={this.Search.bind(this)}>
			  Go
			</button>
		</div>
		<input id="txtSearch" type="text" className="form-control" placeholder="Search" onChange={ this.handleChange.bind(this)} value={this.props.tag}/>
	  </div>
  );}
}

export default withRouter(connect(mapStateToProps)(HeaderContainer));