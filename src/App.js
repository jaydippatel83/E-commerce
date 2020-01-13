import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage.component';
import { Route,Switch} from 'react-router-dom'; 

const Hatspage = (props) => {
  return (
    <div>
      <button onClick={()=>props.history.push('/topics')}>Topics</button>
      <h1>Hats Page</h1>
    </div>
  )
} 
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={Hatspage} /> 
      </Switch> 
    </div>
  );
}
export default App;
