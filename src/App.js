import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Pages/homepage/HomePage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import {auth}  from './firebase/firebase.utils';


class App extends React.Component{

    constructor(){
        super();

        this.state= {
            currentUser : null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount(){

        auth.onAuthStateChanged(user => {
            this.setState({currentUser:user});

            console.log("Hello" +this.state.currentUser);
        })
    }


    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render(){    
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
}

export default App;
