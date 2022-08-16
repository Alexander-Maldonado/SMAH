const Client = require('../models/smah.model');

module.exports.findAllClients = (req, res) => {
    Client.find()
        .then((allClients) => {
            res.json({ allClients })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSingleClient = (req, res) => {
    Client.findOne({ _id: req.params.id })
        .then(oneClient => {
            res.json({ oneClient })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewClient = (req, res) => {
    Client.create(req.body)
        .then(newClient => {
            res.json({ newClient })
        })
        .catch((err) => response.status(400).json(err));
    }

module.exports.updateExistingClient = (req, res) => {
    Client.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateClient => {
            res.json({ user: updateClient })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingClient = (req, res) => {
    Client.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

