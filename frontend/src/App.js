import React from 'react';
//we must bring in the container component from React Bootstrap to use it
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';


const App = ()=> {
  return (

    // empty tags represent fragments
    <>
        <Header/>
        <main className = 'py-3'>
          <Container>
          <h1>Chad's web store</h1>
          </Container>
      
        </main>
        <Footer/>
       
    </>
  );
}

export default App;
