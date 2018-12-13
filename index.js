// Nos différentes constantes pour les packages importés

const figlet = require('figlet'); // Gérer le style de police
const clear = require('clear'); // Nettoyer la page
const chalk = require('chalk'); // Couleur
const inquirer = require('inquirer'); // Intéragir dans la ligne de commande

const questions = require('./questions.js');
const processAnswers = require('./processAnswers.js')

// Déclaration d'une constante pour l'affichage du titre

const App = {

    title : figlet.textSync('Web-Page', 'Ogre'), // Ogre concerne la police

    logTitle : function(){
        clear();
        console.log(chalk.blue.italic(this.title)); // chalk gére la couleur du titre 
        console.log(chalk.green.italic(`I hope you're ready to use my program \n`));
    }

}

App.logTitle(); // Affichage du titre

inquirer.prompt(questions).then(answers =>{
    processAnswers(answers)
});