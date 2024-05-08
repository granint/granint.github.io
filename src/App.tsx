import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Footer from './Footer';
import FAQ from './FAQ';
import Hero from './Hero';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { CssBaseline, createTheme } from '@mui/material';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Box>
        <Hero />
        <FAQ />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
