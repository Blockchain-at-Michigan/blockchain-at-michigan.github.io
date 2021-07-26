import { useState } from 'react';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Divider, Box } from '@material-ui/core';
import { createMuiTheme, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Instagram, YouTube, Twitter, LinkedIn } from '@material-ui/icons';

import SimpleList from './SimpleList';

import Contact from './pages/Contact';
import Education from './pages/Education';
import Consulting from './pages/Consulting';

const pages = [
    { title: 'Home', subtitle: 'What is Blockchain at Michigan?' },
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
    { title: 'Publishing', subtitle: 'Check out our regular newsletter' },
    {
        title: 'Events',
        subtitle: 'Come join us and learn about blockchain!'
    },
    {
        title: 'Resources',
        subtitle: 'Start your blockchain journey here'
    },
    { title: 'About', subtitle: 'Who we are and what we do' },
    { title: 'Contact', subtitle: 'Reach out to us', app: <Contact /> }
];
const names = pages.map(page => page.title);

export const dark = {
    palette: {
        type: "dark"
    }
};

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

const icons = [
    { icon: <Instagram />, href: 'https://www.google.com/' },
    { icon: <YouTube />, href: 'https://www.google.com/' },
    { icon: <Twitter />, href: 'https://www.google.com/' },
    { icon: <LinkedIn />, href: 'https://www.google.com/' },
]

function LogoTitle() {
    return (
        <div>
            Logo

            <Typography color="inherit">
                BLOCKCHAIN AT MICHIGAN
            </Typography>
        </div>
    );
}

function App() {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const page = pages[index];

    function Header() {
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
            <Grid container>
                <Grid item xs={3}>
                    <LogoTitle />
                </Grid>

                <Grid item xs={3}>
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
            <div
                className={classes.root}
            >
                <Header />

                {/* <Grid container spacing={1}>
                    <Grid item>
                        <Button variant='contained'>
                            {page.title}
                        </Button>
                    </Grid>

                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>
                                {page.subtitle}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid> */}

                <div className={classes.title}>
                    <Button variant='contained'>
                        {page.title}
                    </Button>

                    <Paper className={classes.paper}>
                        {page.subtitle}
                    </Paper>
                </div>

                {page.app}

                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
