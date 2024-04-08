// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// inquirer is allowing us to create the object to create the questions for the README
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// fs is allowing us to create the file i.e. html, README, etc. 
// title, description, table of contents, installation, usage, license, contributing, tests, questions
// WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// I need help with badging, licenses, contribution,
// TODO: Create an array of questions for user input - as it relates to the inquirer 
// const generateMarkdown = ({ title, description, tableofcontents, installation, usage, license, contributing, tests, questions }) =>
// `# ${title}
// ## ${description}
// ## ${tableofcontents}
// ## ${installation}
// ## ${usage}
// ## ${license}
// ## ${contributing}
// ## ${tests}
// ## ${questions}`
const query = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your assignment/project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your assignment.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install your project, if applicable.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any usage information for your project, if applicable.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide any testing instructions',
    },
    {
        type: 'input',
        name: 'license',
        message: 'ISC',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, {
        encoding: 'utf8',
        flag: 'w'
    }), (err) =>
            err ? console.log(err) : console.log('Successfully created ReadMe!')
        ;
}
// => is the definition of a function
// TODO: Create a function to initialize app - do the prompting here and ask the questions. Inquire
function init() {
    inquirer
        .prompt(query).then((answers) => {
            console.log(answers)
            const MarkdownPageContent = generateMarkdown(answers);
            writeToFile('README.md', MarkdownPageContent);
        });
}
// Function call to initialize app
init();
