import { query } from 'libs/db';
import Cors from 'cors';

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

const handlerSearchSlug = async(req, res) => {
    await runMiddleware(req, res, cors)
    try {
        var {
            slug,
            start_date,
            end_date
        } = req.body
        var field = await query(`
            SELECT id FROM fields
            WHERE slug = ?
        `, [slug])
        if (field.length === 0) return res.json({data: field})
        var {id} = field[0]

        var checkAvb = await query(`
            SELECT id FROM bookings WHERE field_id = ? AND start_date >= ? AND end_date <= ?
        `, [id, start_date, end_date])
        if (checkAvb.length === 0) return res.json({data: checkAvb})

        res.status(200).json({ data: checkAvb })
    } catch (error) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerSearchSlug;

// {"start_date":"2021-06-16 12:00:00","end_date":"2021-05-16 14:00:00","slug":"lapangan-kedua"}