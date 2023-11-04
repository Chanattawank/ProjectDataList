const { Antacids } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const antacidss = await Antacids.findAll()
            res.send(antacidss)
        } catch (err) {
            res.status(500).send({
                error: 'the Antacids information was incorrect'
            })
        }
    },


    async create(req, res) {
        try {
            const antacids = await Antacids.create(req.body)
            res.send(antacids.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Antacids incorrect'
            })
        }
    },


    async put(req, res) {
        try {
            await Antacids.update(req.body, {
                where: {
                    id: req.params.antacidsId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Antacids incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const antacids = await Antacids.findOne({
                where: {
                    id: req.params.antacidsId
                }
            })
            if (!antacids) {
                return res.status(403).send({
                    error: 'The Antacids information was incorrect'
                })
            }
            await antacids.destroy()
            res.send(antacids)
        } catch (err) {
            res.status(500).send({
                error: 'The Antacids information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const antacids = await Antacids.findByPk(req.params.antacidsId)
            res.send(antacids)
        } catch (err) {
            res.status(500).send({
                error: 'The Antacids information was incorrect'
            })
        }
    },
}