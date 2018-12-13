const fs = require('fs')
const slug = require('slug')

module.exports = function(answers) {

    // Créer un dossier 

    fs.mkdir(slug(answers.titre_site), function(err) { // slug --> slugifies every string, even when it contains unicode!

        if (err) throw err;

        console.log('Dossier crée');

        creerFichierHTML(answers); 

    });

}

let options = {
    flag : 'a' // Options flag 
};

function creerFichierHTML(answers) {
    
    // Variable qui stocke le document html

    let htmlString = `
<!DOCTYPE html>
        
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${answers.titre_site}</title>` // Selon le titre donnée, l'inscrit a cette emplacement
if(answers.bootstrap === true){ // Si on souhaite utiliser du bootstrap on envoie le fichier css et plus bas js 
    htmlString += `            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">`
}
htmlString += `
        </head>

        <body>`;
if(answers.bootstrap === true){ // Si on souhaite utiliser du bootstrap on envoie le fichier js via cdn 
    htmlString += 
            `
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>`;
}  
htmlString +=` 
        </body>
        
    </html>`;

    // Création du fichier si n'est pas déjà crée

    fs.writeFile('index.html', htmlString,(err) => {
        if (err) throw err;
            console.log("The file is created");
    });

}
    /* 
    
/*

        // Si on souhaite utiliser le framwork jquery, on envoie le fichier js
        
        if(answers.jquery === true){
            htmlString += '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>'; // fichier js via cdn
        }

        htmlString += 

        `</body>
    
    </html>`;

// et a la fin, tu fais writeFile ;)
*/
