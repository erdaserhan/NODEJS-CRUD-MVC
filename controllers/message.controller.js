const Message = require('../models/message.model');

const moment = require('moment');

console.log('On passe dans controller/message.controller.js ');

exports.create = (req, res) => {
    console.log('POST Crée un message');
    const titrePage = 'Forlumaire reçu';
    const lenom = req.body.nom;
    const lemessage = req.body.msg;
    
    if ((!req.body)||(lenom="")||(lemessage="")) {
        console.log('Le contenu ne peut pas être vide');
        res.redirect('contact_form');
    } else {
        console.log(req.body)
    }
};