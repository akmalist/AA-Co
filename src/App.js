  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.page.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/signin-signout/signin-signout.component';

 
  function App() {
	return (
	  <div>
		 <Header/>
		<Switch>
		  <Route exact path='/' component={HomePage} />
		  <Route path='/shop' component={ShopPage} />
		  <Route path ='/sign' component ={SignInSignOut}/>
		</Switch>
	  </div>
	);
  }
  
  export default App;
