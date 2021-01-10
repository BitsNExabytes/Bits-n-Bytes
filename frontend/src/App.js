import React from 'react';
//we must bring in the container component from React Bootstrap to use it
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


const App = ()=> {
  return (

    // For routes to work we wrap everything in a router tag
    <Router>
        <Header/>
        <main className = 'py-3'>
          <Container>
    
          <Route path = '/' component={HomeScreen} exact/>
          </Container>
      
        </main>
        <Footer/>
       
    </Router>
  );
}

export default App;
