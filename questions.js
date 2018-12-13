module.exports = [
    {
        type: 'input',
        name: 'titre_site',
        message: 'Quel est le titre de votre site web ? '
    },
    {
        type: 'confirm',
        name: 'bootstrap',
        message: 'Voulez-vous utiliser Bootstrap CSS/JS ?'
    },
    {
        type: 'confirm',
        name: 'jquery',
        message: 'Voulez-vous utiliser la bibliothéque "jQuery" ?'
    },
    {
        type: 'confirm',
        name: 'responsive',
        message: 'Voulez-vous prévoir une version responsive pour le site ?'
    },
    {
        type: 'list',
        name: 'polices',
        message: 'Quelle police principale souhaitez-vous utiliser ?',
        choices: [
            'Roboto',
            'Open+Sans',
            'Lato'
        ]
    },
]
