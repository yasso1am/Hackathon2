import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Footer from './Footer'
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import About from './About'; 
import Admin from './Admin';
import FetchFoods from './FetchFoods';

class App extends Component {
  render() {
    return (
    <div>
      <NavBar />
        <Flash />
        <FetchUser>
        <Switch>
            <Route exact path='/about' component={About} /> 
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} /> 
              <Route path ='/food/' component={FetchFoods} />
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
              <ProtectedRoute exact path='/Admin' component={Admin} />
              <Route component={NoMatch} />
          <Footer />
        </Switch>
        </FetchUser>
    </div>
    );
  }
}

export default App;
