import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Pages/homepage/HomePage.component';
import ShopPage from './Pages/shop/shop.component';
import './App.css';


function App() {
  return (
    <div>
    	<Switch>
        	  <Route exact path='/' component={HomePage} />
        	  <Route path='/shop' component={ShopPage} />
    	</Switch>
    </div>
  );
}

export default App;
