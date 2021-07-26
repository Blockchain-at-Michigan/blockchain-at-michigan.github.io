import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { createMuiTheme, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Footer from './components/Footer';

const pages = 'Home Education Consulting Research/Entrepreneurship Publishing Events Resources About'.split(' ');

export const dark = {
    palette: {
        type: "dark"
    }
};

function App() {    
    return (
        <ThemeProvider theme={createMuiTheme(dark)}>
            <CssBaseline />
            <div className="App">
                <Header pages={pages} />
                <Footer pages={pages} />
            </div>
        </ThemeProvider>
    );
}

export default App;
