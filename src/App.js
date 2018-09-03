import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Info from './components/info/info';
import About from './components/about/about';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={() => <Info />}/>
            <Route exact path='/about' component={() => <About />}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
