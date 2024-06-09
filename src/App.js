import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;