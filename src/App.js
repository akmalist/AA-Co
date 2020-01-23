  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.page.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/signin-signout/signin-signout.component';
import {auth} from './firebase/firebase.utils'
 
class App extends React.Component{
 constructor(){
	 super();
	 this.state = {
		 currentUser: null
	 	}
	 }
	  unsubscribeFromAuth = null;
	 
	 componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({currentUser: user});
		})

	 }

	 componentWillUnmount(){
		 this.unsubscribeFromAuth();
	 }


	  render(){
		return (
			<div>
			   <Header currentUser={this.state.currentUser}/>
			  <Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path ='/sign' component ={SignInSignOut}/>
			  </Switch>
			</div>
		  );
	  }
	
  }
  
  export default App;
