import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Customer from './components/Customer/Customer';
import Admin from './components/Admin/Admin';
import { AuthProvider } from './authentication/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/customer">
              <Customer></Customer>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
