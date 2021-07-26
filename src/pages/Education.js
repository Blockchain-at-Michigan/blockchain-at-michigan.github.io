import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    const range = new Array(7).fill(0);

    const items = range.map( (x, i) => (
        <Grid item xs={4}>
            <Paper className={classes.paper}>
                BAM Winter Cohort 2021 Projects Team {i}
            </Paper>
        </Grid>
    ));

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {items}
            </Grid>
        </div>
    );
}
