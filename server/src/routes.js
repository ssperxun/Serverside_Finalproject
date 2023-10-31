const SewingsController = require('./controllers/SewingsController')

module.exports = (app) => {
    /* RESFUL Api dor users management */
    // get all sewing
    app.get('/sewings', SewingsController.index)

    // create sewing
    app.post('/sewing', SewingsController.create)

    // edit sewing, suspend, active
    app.put('/sewing/:sewingId', SewingsController.put)

    // delete sewing
    app.delete('/sewing/:sewingId', SewingsController.remove)

    // get sewing by id
    app.get('/sewing/:sewingId', SewingsController.show)}