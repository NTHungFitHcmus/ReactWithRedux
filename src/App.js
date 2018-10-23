import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Explore from './components/Explore';
import Photo from './components/Photo';
import Tag from './components/Tag';
import Header from './components/header';
import {BrowserRouter as Router, Route,  Link} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      wordsSearch: ''
    }
  };
  
  handleChange(e){
    this.setState({
      wordsSearch: e.target.value
    })
  };
  
  Search(){
	  const {history} = this.props;
	  if (this.state.wordsSearch !== '')
	  {
		  history.push(`/Tag/${this.state.wordsSearch}`);
	  }
  };
  
  render() {
    return (		
	  <div className="App">
		<Router>
			<div>
				  <Header />		
				<Route exact path="/" component={Explore} />
				<Route exact path='/Photo/:id' component={Photo} />
				<Route exact path='/Tag/:tag' component={Tag} />
		    </div>
		</Router>
	  </div>
    );
  }
}

export default App;
