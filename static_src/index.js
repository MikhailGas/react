import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';


ReactDOM.render(
    <ThemeProvider>
        <Layout />
    </ThemeProvider>
    ,
   document.getElementById('root'),
);


