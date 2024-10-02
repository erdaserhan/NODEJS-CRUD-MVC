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
        console.log(req.body);

        const unMsg = new Message({
            nom: req.body.nom,
            msg: req.body.nom
        });

        Message.create(unMsg, function(err, data) {
            if(err) {
                res.status(500).send({
                    message: "Erreur pendant la création du message"
                });
            }else {
                console.log('Data: ', data);
                res.render('traiter_form', { titre: titrePage, nom: unMsg.nom, msg: unMsg.msg});
            }
        });
    }
};

exports.readAll = (req, res) => {
    console.log('GET Tous les messages');
    Message.readAll(function(err, data){
        if(err) {
            res.status(500).send({
                message: "Erreur pendant la création du message"
            });
        } else {
            console.log('Data :', data);
            const titrePage = "Tableau des messages";
            moment.locale('fr');
            res.render('listeMessages', {titre: titrePage, donnees: data, moment: moment});
        }
    });
};

exports.newmsg = (req, res) => {
    console.log("Affichage du formulaire de création")
}; 

exports.list = (req, res) => {
    console.log('Affichage de la liste des messages');
    Message.readAll(function(err, data) {
        if(err) {
            res.status(500).send({
                message: ""
            })
        }
    })
};