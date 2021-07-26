import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function LogoTitle() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Logo

            <Typography color="inherit">
                BLOCKCHAIN AT MICHIGAN
            </Typography>
        </div>
    );
}