import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import  CheckOut from './pages/checkout/checkout.component';
import FooterPage from './components/footer/footer.component';
import ContactUs from './components/contact/contact.component';

class App extends React.Component {

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
      setCurrentUser( userAuth );
    }) 
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route   path='/shop' component={ShopPage} />
          <Route   path='/contact' component={ContactUs} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route
            exact
            path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignIn />)} />
        </Switch>
        <FooterPage />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector  ({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
