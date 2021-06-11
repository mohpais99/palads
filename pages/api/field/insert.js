import { query } from 'libs/db';
import authorization from 'helpers/Authorization';
import Cors from 'cors';
import * as g from 'libs/Global'

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}

const cors = Cors({
    methods: ['POST', 'HEAD'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}

const handlerFieldInsert = async (req, res) => {
    config
    await runMiddleware(req, res, cors)
    try {
        const data = req.body
        await authorization(req, res);
        const slug  = g.convertToSlug(data.name)
        const results = await query(`
            INSERT INTO fields (name, slug, image, description, price, status)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [data.name, slug, data.image, data.description, data.price, true])
        if (results.affectedRows !== 1) res.status(500).json({data: 'Failed!'})

        return res.json({data: results})
    } catch (e) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerFieldInsert;