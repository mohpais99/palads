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

const handlerBooking = async (req, res) => {
    await runMiddleware(req, res, cors)
    try {
        const results = await query(`
            SELECT 
                b.field_id, 
                b.user_id, 
                b.amt, 
                b.start_date, 
                b.end_date,
                f.name,
                f.image,
                u.first_name,
                u.last_name,
                u.no_telp,
                u.email
                    FROM bookings AS b 
            LEFT JOIN 
                fields AS f
                    ON f.id = b.field_id
            LEFT JOIN 
                users AS u
                    ON u.id = b.user_id
        `)

        return res.json({data: results})
    } catch (e) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerBooking;