const clientController = require('../controllers/smah.controller');
const contactController = require('../controllers/contact.controller');

module.exports = app => {
    app.get('/api/smah', clientController.findAllClients);
    app.get('/api/smah/:id', clientController.findOneSingleClient);
    app.put('/api/smah/:id', clientController.updateExistingClient);
    app.post('/api/smah', clientController.createNewClient);
    app.delete('/api/smah/:id', clientController.deleteAnExistingClient);
    app.post('/api/smah/contact', contactController.createNewContact);
}
