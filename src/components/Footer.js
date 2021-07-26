import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Divider } from '@material-ui/core';
import { Instagram, YouTube, Twitter, LinkedIn } from '@material-ui/icons';

import LogoTitle from './LogoTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const icons = [
    { icon: <Instagram />, href: 'https://blockchain-at-michigan.github.io/' },
    { icon: <YouTube />, href: 'https://blockchain-at-michigan.github.io/' },
    { icon: <Twitter />, href: 'https://blockchain-at-michigan.github.io/' },
    { icon: <LinkedIn />, href: 'https://blockchain-at-michigan.github.io/' },
]

export default function CenteredGrid(props) {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <LogoTitle />
            </Grid>

            <Grid item xs={3}>
                <Typography>
                    Quick Links
                </Typography>
                <br />

                {props.pages.map(page => (
                    <Typography variant='body2'>
                        {page}
                    </Typography>
                ))}
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
