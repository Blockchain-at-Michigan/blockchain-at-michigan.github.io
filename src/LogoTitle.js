import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from './images/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
}));

export default function LogoTitle() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={logo} />

            <Typography color="inherit">
                BLOCKCHAIN AT MICHIGAN
            </Typography>
        </div>
    );
}