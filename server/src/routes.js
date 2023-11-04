const AntacidsController = require('./controllers/AntacidsController')
const AntipyreticsController = require('./controllers/AntipyreticsController')
const CoughController = require('./controllers/CoughController')
const DecongestantController = require('./controllers/DecongestantController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // Antacids
    app.get('/antacidss', AntacidsController.index)
    
    app.post('/antacids', AntacidsController.create)
    
    app.put('/antacids/:antacidsId', AntacidsController.put)
    
    app.delete('/antacids/:antacidsId', AntacidsController.delete)
    
    app.get('/antacids/:antacidsId', AntacidsController.show)

    
    // Antipyretics
    app.get('/mas', AntipyreticsController.index)
    
    app.post('/antipyretics', AntipyreticsController.create)
    
    app.put('/antipyretics/:antipyreticsId', AntipyreticsController.put)

    app.delete('/antipyretics/:antipyreticsId', AntipyreticsController.delete)
    
    app.get('/antipyretics/:antipyreticsId', AntipyreticsController.show)

    
    //Cough
    app.get('/coughs', CoughController.index)
    
    app.post('/cough', CoughController.create)
    
    app.put('/cough/:coughId', CoughController.put)
    
    app.delete('/cough/:coughId', CoughController.delete)
    
    app.get('/cough/:coughId', CoughController.show)


    // Decongestant
    app.get('/decongestants', DecongestantController.index)
    
    app.post('/decongestant', DecongestantController.create)
    
    app.put('/decongestant/:decongestantId', DecongestantController.put)
    
    app.delete('/decongestant/:decongestantId', DecongestantController.delete)
    
    app.get('/decongestant/:decongestantId', DecongestantController.show)
}