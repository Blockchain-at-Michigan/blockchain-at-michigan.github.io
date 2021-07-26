import { useState } from 'react';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Divider, Box, Tabs, Tab } from '@material-ui/core';
import { createMuiTheme, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Instagram, YouTube, Twitter, LinkedIn } from '@material-ui/icons';

import SimpleList from './SimpleList';
import Header from './Header';
import LogoTitle from './LogoTitle';

import Contact from './pages/Contact';
import Education from './pages/Education';
import Home from './pages/Home';
import Consulting from './pages/Consulting';
import Publishing from './pages/Publishing';
import Events from './pages/Events';

const useStyles = makeStyles( (theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    }
}));

export const dark = {
    palette: {
        type: "dark"
    }
};

const pages = [
    {
        title: 'Home',
        subtitle: 'What is Blockchain at Michigan?',
        app: <Home />,
    },
    {
        title: 'Education',
        subtitle: 'Check out past cohort projects',
        app: <Education />,
    },
    {
        title: 'Consulting',
        subtitle: 'A hands-on building experience',
        app: <Consulting />,
    },
    {
        title: 'Research',
        subtitle: 'Our innovation efforts within the space'
    },
    {
        title: 'Publishing',
        subtitle: 'Check out our regular newsletter',
        app: <Publishing />,
    },
    {
        title: 'Events',
        subtitle: 'Come join us and learn about blockchain!',
        app: <Events />,
    },
    {
        title: 'Resources',
        subtitle: 'Start your blockchain journey here'
    },
    { title: 'About', subtitle: 'Who we are and what we do' },
    { title: 'Contact', subtitle: 'Reach out to us', app: <Contact /> }
];
const names = pages.map(page => page.title);

const icons = [
    { icon: <Instagram />, href: 'https://www.google.com/' },
    { icon: <YouTube />, href: 'https://www.google.com/' },
    { icon: <Twitter />, href: 'https://www.google.com/' },
    { icon: <LinkedIn />, href: 'https://www.google.com/' },
]

function App() {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const page = pages[index];

    function Header1() {
        return (
            <Toolbar>

                <LogoTitle />

                <Grid container spacing={1} justify='flex-end'>
                    {names.map( (name, index) => (
                        <Grid item>
                            <Button
                                onClick={() => setIndex(index)}
                            >
                                {name}
                            </Button>
                            {/* <Paper className={classes.paper}>
                                {name}
                            </Paper> */}
                        </Grid>
                    ))}

                    <Divider orientation="vertical" flexItem />

                    <Grid item>
                        <Button
                            variant='contained'
                            color='primary'
                            // size='large'
                        >
                            Contact
                        </Button>
                    </Grid>
                </Grid>

            </Toolbar>

        );
    }

    function Footer() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <LogoTitle />
                </Grid>

                <Grid item xs={2}>
                    <Typography>
                        Quick Links
                    </Typography>

                    <SimpleList names={names} setIndex={setIndex} />
                </Grid>

                <Grid item xs={2} />

                <Grid item xs={4}>
                    <Typography variant='h4'>
                        For business inquiries:
                    </Typography>

                    <Typography variant='body2'>
                        blockchain@michigan.edu
                    </Typography>

                    {icons.map(row => (
                        <IconButton
                            color='inherit'
                            href={row.href}
                            target='_blank'
                        >
                            {row.icon}
                        </IconButton>
                    ))}
                </Grid>
            </Grid>
        
        );
    }

    return (
        <ThemeProvider
            theme={createMuiTheme(dark)}
        >
            <CssBaseline />

            <Header names={names} index={index} setIndex={setIndex} />

            <Box p={2}>

                <div className={classes.title}>
                    <Button variant='contained'>
                        {page.title}
                    </Button>

                    <Paper className={classes.paper}>
                        {page.subtitle}
                    </Paper>
                </div>
                <br />
                
                <Box p={9}>
                    {page.app}
                </Box>
                
                <Footer />
            </Box>
        </ThemeProvider>
    );
}

export default App;
