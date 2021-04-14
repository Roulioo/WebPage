// My packages

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
        
    // Variable that stores the HTML document

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
    <html lang="es">
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

    // My variable for the css

    let cssString = `/* Here is my css for my web page */`

    // If it's true we'll add the css for the responsive version

    if(answers.responsive === true){
        cssString += `

@media all and (max-width:480px){
    #logo{float : none; width: 30%; margin-left: 5%} /* logo and menu is example in here */
    #menu{float : none; width: auto; margin-left: 10px;}
}`
    };

    if(answers.responsive === true){
        fs.writeFile('style.css',cssString,(err) => { // Create a css file for responsive version
            if (err) throw err;
                console.log("The css file is created\n");
            });
    };
    
    // Creating the file index.html if not already created

    if(answers.responsive === false){
        fs.writeFile('index.html', htmlString,(err) => {
            if (err) throw err;
                console.log("The html file is created\n");
        });
    }else if(answers.responsive === true){
        fs.writeFile('index.html', htmlString,(err) => {
            if (err) throw err;
                console.log("The html file is created\n");
        });
    }

    // We'll add the font chosen on our css for the web page

    if(answers.responsive === false || answers.responsive === true){
    
if(answers.polices === "Lato"){
            cssString += `
        
body{
    font-family: Lato, Helvetica, sans-serif;
}`
    };
        
    if(answers.polices === "Roboto"){
        cssString += `
        
body{
    font-family: "Roboto";
}`
    };
        
    if(answers.polices === "Open+Sans"){
        cssString += `
        
body{
    font-family: "Open Sans", sans-serif;
}`
    };

    fs.writeFile('style.css',cssString,(err) => { // Create a css file for responsive version
        if (err) throw err;
            console.log("The font css file is created\n");
        });
    
}

}
