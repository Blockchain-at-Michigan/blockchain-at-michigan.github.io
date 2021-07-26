
const subtitles = {
    Home: 'What is Blockchain at Michigan?',
    Education: 'Check out past cohort projects',
    Consulting: 'A hands-on building experience',
    Research: 'Our innovation efforts within the space',
    Publishing: 'Check out our regular newsletter',
    Events: 'Come join us and learn about blockchain!',
    Resources: 'Start your blockchain journey here',
    About: 'Who we are and what we do',
    Contact: 'Reach out to us',
}

console.log(
    Object.entries(subtitles).map( ([title, subtitle]) => ({ title, subtitle }) )
)