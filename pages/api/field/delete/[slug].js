import { query } from 'libs/db';
import Cors from 'cors';

const cors = Cors({
    methods: ['DELETE', 'HEAD'],
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
    try {
        const { slug } = req.query
        const results = await query(`
            DELETE FROM fields
            WHERE slug = ?
        `, [slug])
        if (results.length === 0) return res.json({data: []})
        res.status(204).json({ data: results })
    } catch (error) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerFieldSlug;