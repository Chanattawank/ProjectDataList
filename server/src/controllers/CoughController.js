const { Cough } = require('../models')

module.exports = {

    async index(req, res) {
        try {
            const coughs = await Cough.findAll()
            res.send(coughs)
        } catch (err) {
            res.status(500).send({
                error: 'the Cough information was incorrect'
            })
        }
    },



    async create(req, res) {
        try {
            const cough = await Cough.create(req.body)
            res.send(cough.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Cough incorrect'
            })
        }
    },


    async put(req, res) {
        try {
            await Cough.update(req.body, {
                where: {
                    id: req.params.coughId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Cough incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const cough = await Cough.findOne({
                where: {
                    id: req.params.coughId
                }
            })
            if (!cough) {
                return res.status(403).send({
                    error: 'The Cough information was incorrect'
                })
            }
            await cough.destroy()
            res.send(cough)
        } catch (err) {
            res.status(500).send({
                error: 'The Cough information was incorrect'
            })
        }
    },


    async show(req, res) {
        try {
            const cough = await Cough.findByPk(req.params.coughId)
            res.send(cough)
        } catch (err) {
            res.status(500).send({
                error: 'The Cough information was incorrect'
            })
        }
    },
}