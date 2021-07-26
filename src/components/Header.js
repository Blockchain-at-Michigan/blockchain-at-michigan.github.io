import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Divider } from '@material-ui/core';

import LogoTitle from './LogoTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <Toolbar className={classes.root}>

            <LogoTitle />

            <Grid container spacing={1} justify='flex-end'>
                {props.pages.map(page => (
                    <Grid item>
                        <Paper className={classes.paper}>
                            {page}
                        </Paper>
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
