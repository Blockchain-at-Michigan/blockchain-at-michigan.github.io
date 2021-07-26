import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box, Paper, Grid, Divider } from '@material-ui/core';
import { ArrowForwardIos, AccountCircle, Timeline, Public } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    divider: {
        margin: theme.spacing(9, 0),
    },
}));

const middle = [
    {
        title: '3 years',
        sub: 'Since we began our journey',
        icon: <Timeline />,
    },
    {
        title: '50+',
        sub: 'Currently active members',
        icon: <AccountCircle />,
    },
    {
        title: '7+',
        sub: 'Companies that we have worked with',
        icon: <Public />,
    },
]

export default function CenteredGrid() {
    const classes = useStyles();

    const items = middle.map(row => (
        <Grid item xs>
            {row.icon}

            <Typography variant='h6'>
                {row.title}
            </Typography>

            <Typography variant='body2'>
                {row.sub}
            </Typography>
        </Grid>
    ))

    return (
        <div className={classes.root}>
            <Grid container spacing={10}>
                <Grid container item>
                    <Grid item xs>
                        <Typography variant='h3'>
                            We are dedicated to building leaders in the blockchain space
                        </Typography>
                        
                        <Typography variant='body2'>
                            Our mission is to prepare students to excel in the Blockchain space by providing professional development opportunities alongside industry partners, building educational resources with multidisciplinary facets, and aiding students in meaningful research and project development.
                        </Typography>
                        
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            endIcon={<ArrowForwardIos />}
                        >
                            Join us
                        </Button>
                    </Grid>

                    <Grid item xs>
                        <Paper>xs=3</Paper>
                    </Grid>
                </Grid>
                
                <Divider className={classes.divider} />

                <Grid container item>
                    {items}
                </Grid>
                
                <Divider className={classes.divider} />

                <Grid container item>
                    <Grid item xs>
                        <Paper>xs=3</Paper>
                    </Grid>

                    <Grid item xs>
                        <Typography variant='h3'>
                            Why you should join BAM
                        </Typography>
                        
                        <Typography variant='body2'>
                            Join a select group to learn about blockchain, build your own decentralized app, and consult for startups and F500 companies!
                        </Typography>
                    </Grid>
                    
                </Grid>
            
            </Grid>
        </div>
    );
}
