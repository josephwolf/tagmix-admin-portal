import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

const Spinner = () => (
    <MuiThemeProvider>
        <div className="tagmix--pagetop-center">
            <CircularProgress className="tagmix--center-item" size={80} thickness={5}/>
        </div>
    </MuiThemeProvider>

);

export default Spinner;
