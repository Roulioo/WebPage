module.exports = [
    {
        type: 'input',
        name: 'titre_site',
        message: 'What is the title of your website ? '
    },
    {
        type: 'list',
        name: 'traitement',
        message: 'What language of treatment do you want ?',
        choices: [
            'en (English)',
            'fr (French)',
            'es (Spanish)'
        ]
    },
    {
        type: 'confirm',
        name: 'bootstrap',
        message: 'Do you want to use Bootstrap CSS / JS ?'
    },
    {
        type: 'confirm',
        name: 'jquery',
        message: 'Do you want to use the library "jQuery" ?'
    },
    {
        type: 'confirm',
        name: 'responsive',
        message: 'Do you want to provide a responsive version for your site ?'
    },
    {
        type: 'list',
        name: 'polices',
        message: 'Which main font do you want to use ?',
        choices: [
            'Roboto',
            'Open+Sans',
            'Lato'
        ]
    },
]
