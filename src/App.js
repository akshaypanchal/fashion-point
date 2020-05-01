import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import {auth, createUserProfileDocument}  from './firebase/firebase.utils';

import HomePage from './Pages/homepage/HomePage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {setCurrentUser} from './redux/user/user-actions';

class App extends React.Component{


    unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);