import { query } from 'libs/db';
import Cors from 'cors';
import authorization from 'helpers/Authorization';
import * as g from 'libs/Global'

const cors = Cors({
    methods: ['PUT', 'HEAD'],
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

const handlerFieldSlug = async(req, res) => {
    await runMiddleware(req, res, cors)
    await authorization(req, res);
    try {
        const { id } = req.query
        const {
            name,
            image,
            description,
            price,
            status
        } = req.body
        const slug = g.convertToSlug(name)
        const results = await query(`
            UPDATE fields SET name = ?, slug = ?, image = ?, description = ?, price = ?, status = ? WHERE id = ?
        `, [name, slug, image, description, price, status, id])
        return res.status(200).json({ success: results.affectedRows })
    } catch (err) {
        return res.status(500).json({ success: err.message })
    }
}

export default handlerFieldSlug;