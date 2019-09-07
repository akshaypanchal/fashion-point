import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Pages/homepage/HomePage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';


function App() {
  return (
    <div>
    	<Header />
		{/* Routing for the Home and Shop page */}
    	<Switch>
        	  <Route exact path='/' component={HomePage} />
        	  <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
    	</Switch>
    </div>
  );
}

export default App;
