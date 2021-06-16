import { query } from 'libs/db';
import Cors from 'cors';

const cors = Cors({
    methods: ['GET', 'HEAD'],
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
        const results = await query(`
            SELECT name, price, slug, image, description FROM fields
            WHERE status = ?
        `, [1])
        
        res.status(200).json({ data: results })
    } catch (error) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerFieldSlug;