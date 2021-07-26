import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import LogoTitle from './LogoTitle';
import { Toolbar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        minWidth: 55,
    }
}));

export default function SimpleTabs(props) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.setIndex(newValue);
    };

    const items = props.names.map( (name, index) => (
        <Tab label={name} className={classes.tab} />
    ));

    return (
        <div className={classes.root}>
            <AppBar position="static" color='default'>
                <Toolbar>
                    <LogoTitle />

                    <Tabs
                        value={props.index}
                        onChange={handleChange}
                        justify='flex-end'
                    >
                        {items}
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
}
