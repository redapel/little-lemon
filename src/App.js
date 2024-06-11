import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';
import { AlertProvider } from './alertContext';
import Alert from './Alert';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ChakraProvider>
          <AlertProvider>
            <Header />
            <Nav />
            <Main />
            <Footer />
            <Alert />
          </AlertProvider>
        </ChakraProvider>
      </React.Fragment>
    );
  }
}

export default App;
