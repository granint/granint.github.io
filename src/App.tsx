import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Box from '@mui/material/Box';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Privacy from './legal/Privacy';
import Footer from './Footer';
import Terms from './legal/Terms';

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Box>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
