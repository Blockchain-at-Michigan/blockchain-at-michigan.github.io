import { Typography, Button, IconButton, Grid, Paper, Divider, Box } from '@material-ui/core';
import IFrame from 'react-iframe';

const url = 'https://calendar.google.com/calendar/embed?src=c_f5evpkicssqr22vl9g8pvaqb9s%40group.calendar.google.com&ctz=America%2FNew_York'

function App() {
    return (
        <div>
            <Box width='55%' textAlign='center'>
                <Typography variant='h3'>
                    Interested in joining us?
                </Typography>
                
                <Typography>
                    Come to one of our many events!
                </Typography>
            </Box>

            <br /><br /><br /><br />

            <IFrame
                url={url}
                width='100%'
                height='555'
            />
        </div>
    );
}

export default App;
