import React from 'react';
import Header from './components/Header';

import Experience from './components/Experience';

import './styles.css';
import Details from './components/Details';
import Personalprofile from './components/Personalprofile';
import { Container } from '@mui/material';

const App = () => {
  return (
      <Container>
    <div className="app">
      <div className="sidebar">
        <Header />
      </div>


        <div className="content">
          <div className="sidebar-right">
            <Details />
            <Experience />
            <Personalprofile />

          </div>
        </div>
    </div>
      </Container>
    
  );
};


export default App;
