import { query } from 'libs/db';

const handlerUser = async (req, res) => {
    if (req.method !== 'GET') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const results = await query(`
            SELECT a.first_name, a.last_name, a.no_telp, a.gender, a.pod, a.bod, a.address, b.user_id, b.email, b.username, b.email, b.status FROM users as a INNER JOIN auths as b ON b.user_id = a.id WHERE b.role = 'member' 
        `)
        if (results.length === 0) return res.json({data: []})

        return res.json({data: results})
    } catch (e) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerUser;
