import React, { Component } from 'react';
import logo from '../logo.svg';
import HeaderContainer from '../containers/headerContainer';
// import { withRouter } from 'react-router';
// import {connect} from 'react-redux';
// import {doClear, doSearch} from '../actions';

// const mapStateToProps = ({search}) => {
    // return {
		// tag: search.tag
	// }
// }

class Header extends Component {
  // constructor(props){
    // super(props)
    // this.state = {
      // wordsSearch: '',
    // }
  // };
  
  // componentDidMount(){
     // if(this.props.location.pathname.indexOf('/Tag/') >= 0){
	   // const {dispatch} = this.props;
	   // dispatch(doSearch(this.props.location.pathname.replace('/Tag/', '')));	  
	   // this.setState({
		   // wordsSearch: this.props.tag
	   // })
		// console.log('update '+this.props.tag);
		// // this.setState({
		   // // wordsSearch: this.props.tag
		// // })
      // }
  // };
  
   // // UNSAFE_componentWillReceiveProps(props){
	   // // if(this.state.wordsSearch !== this.props.tag){ 
		 // // console.log('set ' + this.props.tag);
	   // // this.setState({
		   // // wordsSearch: this.props.tag
	   // // })
		
     // // }
   // // }
  // handleChange(e){
	  // console.log(e.target.value);
	// const {history, dispatch} = this.props;	  
	// dispatch(doSearch(e.target.value));
	// this.setState({
	  // wordsSearch: e.target.value
	// })
  // };
  
  // Search(e){
	  // console.log('search ' + this.props.tag);
	  // e.preventDefault();
	  // const {history, dispatch} = this.props;
	  // dispatch(doClear());
	  // // dispatch(doSearch(this.state.wordsSearch));
	  // if (this.state.wordsSearch !== '')
	  // {
		  // history.push(`/Tag/${this.props.tag}`);
	  // }
  // };
  
  render() {
    return (	
		<header className="App-header">
				  <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
				  <h1 className="App-title">Welcome to React</h1>
				  <span><b><u> MSSV</u>: 1512218</b></span>
				  <HeaderContainer />
	  </header>	
  );}
}

export default Header;