import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import Category from './lists/Category'
import CategoryList from './lists/CategoryList'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component = {Landing} />
          <div className="container">
            <Route exact path="/register" component = {Register} />
            <Route exact path="/login" component = {Login} />
            <Route exact path="/profile" component = {Profile} />
            <Route exact path="/add-category" component = {Category} />
            <Route exact path="/category-list" component = {CategoryList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
