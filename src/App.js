import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
      
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() { 
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }
}
export default App;
