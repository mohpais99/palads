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

const handlerCurrentPayment = async (req, res) => {
    await runMiddleware(req, res, cors)
    try {
        const results = await query(`
            SELECT id, va, total, status, expired FROM payments WHERE DATE(c_at) = curdate();
        `)
        if (results.length === 0) return res.json({data: results})

        return res.json({data: results})
    } catch (e) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerCurrentPayment;