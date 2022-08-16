const Contact = require('../models/contact.model');

module.exports.findAllClients = (req, res) => {
    Contact.find()
        .then((allContacts) => {
            res.json({ allContacts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneContact = (req, res) => {
    Contact.findOne({ _id: req.params.id })
        .then(oneContact => {
            res.json({ oneContact })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewContact = (req, res) => {
    Contact.create(req.body)
        .then(newContact => {
            res.json({ newContact })
        })
        .catch((err) => response.status(400).json(err));
    }