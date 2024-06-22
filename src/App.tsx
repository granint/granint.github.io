import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Box from '@mui/material/Box';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { CssBaseline, createTheme } from '@mui/material';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Privacy from './legal/Privacy';
import Footer from './Footer';
import Terms from './legal/Terms';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NavBar from './NavBar';
import Shop from './Shop';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/signin', element: <SignIn /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/shop', element: <Shop /> },
  { path: '/legal/privacy', element: <Privacy /> },
  { path: '/legal/terms', element: <Terms /> },
  { path: '*', element: <NotFound /> },
]

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <HashRouter>
          <Routes>
            {
              routes.map(item => {
                return <Route path={item.path} element={item.element} />
              })
            }
          </Routes>
        </HashRouter>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
