// Our different constants for imported packages

const figlet = require('figlet'); // Manage font style
const clear = require('clear'); // Clean the page
const chalk = require('chalk'); // The colors
const inquirer = require('inquirer'); // Interact in the command line

const questions = require('./questions.js');
const processAnswers = require('./processAnswers.js')

// Our constant for the title display

const App = {

    title : figlet.textSync('Web-Page', 'Ogre'), // Ogre is the police

    logTitle : function(){
        clear();
        console.log(chalk.blue.italic(this.title)); // Chalk manages the color of the title
        console.log(chalk.green.italic(`I hope you're ready to use my program \n`));
    }

}

App.logTitle(); // Title display

inquirer.prompt(questions).then(answers =>{
    processAnswers(answers)
});