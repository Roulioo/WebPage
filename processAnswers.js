const fs = require('fs')
const slug = require('slug')

module.exports = function(answers) {

    // Create a folder

    fs.mkdir(slug(answers.titre_site), function(err) { // slug --> slugifies every string, even when it contains unicode!

        if (err) throw err;

        console.log('\nYour folder is created');

        creerFichierHTML(answers); 

    });

}

    function creerFichierHTML(answers) {
        
    // Variable qui stocke le document HTML5

    let htmlString = `<!DOCTYPE html>
    `
    
    if(answers.traitement === "en (English)"){
        htmlString += `
    <html lang="en">
        `
    }

    if(answers.traitement === "fr (French)"){
        htmlString += `
    <html lang="fr">
        `
    }

    if(answers.traitement === "es (Spanish)"){
        htmlString += `
    <html lang="fr">
        `
    }

    htmlString += 

    `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${answers.titre_site}</title> ` // According to the title given, written at this location
    if(answers.bootstrap === true){ // if we want to use bootstrap we send the file css
        htmlString += `            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">`
    }

    htmlString += `
        </head>

        <body>`;

    if(answers.bootstrap === true){ // If we want to use bootstrap we send the JS file via cdn 
        htmlString += 
                `
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>`;
    }  
    
    if(answers.jquery === true){ // If we want to use the jquery framework, we send the file js
        htmlString += 
                `
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`; // fichier js via cdn
    }

    htmlString +=` 
        </body>
            
    </html>`;

        // Creating the file if not already created

        fs.writeFile('index.html', htmlString,(err) => {
            if (err) throw err;
                console.log("The html file is created");
        });

    

    // Creating a css file for responsive version

    fs.writeFile('style.css', htmlString,(err) => {
        if (err) throw err;
            console.log("The css file is created\n");
    });

}