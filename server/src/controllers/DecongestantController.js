const { Decongestant } = require('../models')

module.exports = {

    async index(req, res) {
        try {
            const decongestants = await Decongestant.findAll()
            res.send(decongestants)
        } catch (err) {
            res.status(500).send({
                error: 'the Decongestant information was incorrect'
            })
        }
    },



    async create(req, res) {
        try {
            const decongestant = await Decongestant.create(req.body)
            res.send(decongestant.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Decongestant incorrect'
            })
        }
    },


    async put(req, res) {
        try {
            await Decongestant.update(req.body, {
                where: {
                    id: req.params.decongestantId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Decongestant incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const decongestant = await Decongestant.findOne({
                where: {
                    id: req.params.decongestantId
                }
            })
            if (!decongestant) {
                return res.status(403).send({
                    error: 'The Decongestant information was incorrect'
                })
            }
            await decongestant.destroy()
            res.send(decongestant)
        } catch (err) {
            res.status(500).send({
                error: 'The Decongestant information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const decongestant = await Decongestant.findByPk(req.params.decongestantId)
            res.send(decongestant)
        } catch (err) {
            res.status(500).send({
                error: 'The Decongestant information was incorrect'
            })
        }
    },
}