const { Antipyretics } = require('../models')

module.exports = {

    async index(req, res) {
        try {
            const mas = await Antipyretics.findAll()
            res.send(mas)
        } catch (err) {
            res.status(500).send({
                error: 'the Antipyretics information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const antipyretics = await Antipyretics.create(req.body)
            res.send(antipyretics.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Antipyretics incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Antipyretics.update(req.body, {
                where: {
                    id: req.params.antipyreticsId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Antipyretics incorrect'
            })
        }

    },

    async delete(req, res) {
        try {
            const antipyretics = await Antipyretics.findOne({
                where: {
                    id: req.params.antipyreticsId
                }
            })
            if (!antipyretics) {
                return res.status(403).send({
                    error: 'The Antipyretics information was incorrect'
                })
            }
            await antipyretics.destroy()
            res.send(antipyretics)
        } catch (err) {
            res.status(500).send({
                error: 'The Antipyretics information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const antipyretics = await Antipyretics.findByPk(req.params.antipyreticsId)
            res.send(antipyretics)
        } catch (err) {
            res.status(500).send({
                error: 'Antipyretics information was incorrect'
            })
        }
    },



}