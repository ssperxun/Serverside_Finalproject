const { Sewing } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const sewings = await Sewing.findAll()
            res.send(sewings)
        } catch (error) {
            res.status(500).send({
                error: 'The sewings information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const sewing = await Sewing.create(req.body)
            res.send(sewing.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create sewing incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Sewing.update(req.body, {
                where: {
                    id: req.params.sewingId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update sewing incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const sewing = await Sewing.findOne({
                where: {
                    id: req.params.sewingId
                }
            })

            if (!sewing) {
                return res.status(403).send({
                    error: 'The sewing information was incorrect'
                })
            }

            await sewing.destroy()
            res.send(sewing)
        } catch (error) {
            res.status(500).send({
                error: 'The sewing information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const sewing = await Sewing.findByPk(req.params.sewingId)
            res.send(sewing)
        } catch (error) {
            res.status(500).send({
                error: 'The sewing information was incorrect'
            })
        }
    }
}