import { query } from 'libs/db';
import authorization from 'helpers/Authorization';

const handlerAuthGet = async (req, res) => {
    if (req.method !== 'GET') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const {id} = await authorization(req, res);
        const results = await query(`
            SELECT * FROM users
            WHERE id = ?
        `, [id])
        if (results.length === 0) return res.json({data: []})
        // const checkPassword = await bcrypt.compare(password, results[0].password);
        // if (!checkPassword) return res.status(401).end();

        return res.json({data: results[0]})
    } catch (e) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerAuthGet
