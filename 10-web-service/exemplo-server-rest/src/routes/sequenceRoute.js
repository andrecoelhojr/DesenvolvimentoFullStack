const SequenceRoute = require('../controllers/sequenceControler')
module.exports = (app) => {
   app.post('/sequence', SequenceRoute.post);
   app.put('/sequence/:id', SequenceRoute.put);
   app.delete('/sequence/:id', SequenceRoute.delete);
   app.get('/sequence', SequenceRoute.get);
   app.get('/sequence/:id', SequenceRoute.getById);
}