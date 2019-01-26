import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Modal from './components/Modal';



class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route  component={Default} />
        </Switch>
        <Modal />
        </React.Fragment>
    );
  }
}

export default App;
