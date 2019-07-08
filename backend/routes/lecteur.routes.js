const express = require('express');

// create an instance of the Router 
const router = express.Router();

const lecteurCtrl = require('../controllers/lecteurCtrl');

// route middleware that will happen on every request
router.use(function(req, res, next) {
    console.log('la méthode du middleware est ',req.method, 'son url est', req.url);
    next(); 
});

// apply routes to the Router instance.
router.get ('/', lecteurCtrl.mainMenu);
router.get('/Les-lecteurs', lecteurCtrl.getAllReader);
router.get('/Un-lecteur', lecteurCtrl.getAReader);
router.get('/lecteur-affichage-par-id/:id', lecteurCtrl.displayByIdReader);
router.get('/lecteur-affichage-par-pseudo', lecteurCtrl.displayByPseudoReader);
router.get('/lecteur-suppression-par-id/:id', lecteurCtrl.deleteByIdReader);
router.get('/lecteur-suppression-par-pseudo', lecteurCtrl.deleteByPseudoReader);
router.post('/Un-lecteur-post', lecteurCtrl.getOneReader);
router.post('/nouveau-lecteur', lecteurCtrl.createReader);

module.exports = router;
