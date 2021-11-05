import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {Typography, Paper, Grid} from '@mui/material';

import { Topbar } from './components/TopBar';
import {Container} from "./components/draggables/Container"
import Toolbox from './components/Toolbox';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">PDF-LAYOUT-EDITOR</Typography>
      <Grid container spacing={3} style={{paddingTop: "10px"}}>
        <Topbar />
        <Grid item xs>
          <Container padding={5} background="#eee">
           
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Paper>
              <Toolbox />
              
          </Paper>          
        </Grid>
      </Grid>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
