import { Typography, Button, IconButton, Grid, Paper, Divider, Box } from '@material-ui/core';
import { createMuiTheme, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    history: {
        textAlign: 'left',
    }
}));

const history = [
    {
        company: 'PayPal',
        project: 'Digital identity',
        consultants: 'Ishaan Hiranandani, George Fane, Rishma Balakrishnan, Rutvi Shah',
    },
    {
        company: 'Karatas Consulting',
        project: 'Supply chain proof of concept',
        consultants: 'Caroline Slack, Pratik Danu, Will Wang, Nisarg Polra',
    },
    {
        company: 'TRM Labs',
        project: 'Anti-money laundering',
        consultants: 'Alexandru Beloiu, Abbas Kagal, Nihar Joshi, Max Walts',
    },
    {
        company: 'Fashmates',
        project: 'Digital art fingerprinting',
        consultants: 'Sejal Sharma, Nik Zazula, Ateev Sharma',
    },
]

const historyItems = history.map(row => (
    <div>
        <Typography variant='h4'>
            {row.company}
        </Typography>
        
        <Typography variant='body2'>
            Project: {row.project}
        </Typography>
        
        <Typography variant='body2'>
            Consultants: {row.consultants}
        </Typography>
        
        <Typography variant='body2'>
            Reviews: {row.Reviews}
        </Typography>

        <br />
    </div>
))

const top = [
    {
        title: 'About Consulting',
        sub: 'Consulting offers students specialized exposure and allows them to put newly acquired skills to work in the industry. Student consultants complete a semester of bi-weekly technical and business classes, after which they are carefully filtered into one of several ongoing projects where student led teams produce solutions for our clients in the industry. Interested student candidates are assigned to different projects depending on their area of interest and specialization. Matching is done carefully with our client’s and applicant’s preferences and goals in mind so that the ten weeklong period of research, designing, testing, feedback, and evaluation leads to fruitful outcomes for our clients as well as our student consultants.'
    },
    {
        title: 'The Process',
        sub: 'Every semester, our board members get to work to put together new consulting projects for our trained student consultants. This is an arduous process of reaching out to different companies, or our previous clients and coming up with new and creative goals that meet the business requirements of potential clients while being within the scope and executable range of our technical developers and business consultant members. The projects are diverse, some being higher on the scale of technical requirements while others delve more into the analyzing and answering business problems. Our team members are flexible and willing to adapt and react to changes to help clients reach a level of satisfaction and clarity for the future. Consulting teams are also in close contact with board members at Blockchain at Michigan, receiving guidance and assistance along the way.'
    },
    {
        title: 'Projects and Clients',
        sub: 'Here at Blockchain at Michigan, we have had the honor and privilege of working with some of the best companies in the world. Our consultant members have completed a variety of projects for several companies in the past and we have received great feedback from our clients, some of whom even return in the future with bigger projects in mind or simply to hire our highly skilled and talented developers, analysts and engineers for full-time jobs, internships, or paid training opportunities.'
    },
    { title: 'Consulting History' },
]

export default function App() {
    const classes = useStyles();

    const items = top.map(row => (
        <div className={classes.paper}>
            <Typography variant='h4'>
                {row.title}
            </Typography>
            
            <Typography variant='body2'>
                {row.sub}
            </Typography>

            <br />
        </div>
    ))

    return (
        <div>
            {items}

            {historyItems}
        </div>
    );
}