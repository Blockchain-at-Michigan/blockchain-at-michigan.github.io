import { Typography, Button, IconButton, Grid, Paper, Divider, Box } from '@material-ui/core';
import IFrame from 'react-iframe';

const url = 'https://bampublish.substack.com/embed'

function App() {
    return (
        <div>
            <Typography variant='h5'>
                Blockchain at Michigan Publishing
            </Typography>

            <IFrame
                url={url}
            />

            <Box p={3} m={3} textAlign='center'>
                <Typography>
                    TODO: embed substack articles. The main url just gives the subscribe page.
                </Typography>
            </Box>
        </div>
    );
}

export default App;
