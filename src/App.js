import React from 'react';
import { LandingPage } from './LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import {Search} from './Search/Search';

const baseURL = 'https://omegameal.auth.us-east-1.amazoncognito.com/'

const suffixURL = '?client_id=28rtt451qusispi2q63ecb880h&response_type=code&scope=aws.cognito.signin.user.admin&redirect_uri=http://localhost:8888'
function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/login' component={() => { 
        window.location.replace(baseURL + 'login' + suffixURL);
        return null;
      }}/>
      <Route path='/signup' component={() => { 
        window.location.replace(baseURL + 'signup' + suffixURL);
        return null;
      }}/>
      <Route path='/' component={LandingPage}/>
    </Switch>
  );
}

export default App;