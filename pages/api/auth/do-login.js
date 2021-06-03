import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
var {query} = require('/libs/db');
// api/user/
const handlerAuthLogin = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const {username, password} = req.body
        const results = await query(`
            SELECT * FROM auths
            WHERE username = ? limit 1
        `, [username])
        if (results.length === 0) return res.json({data: null})

        const checkPassword = await bcrypt.compare(password, results[0].password);
        if (!checkPassword) return res.json({data: null})

        const {
            user_id,
            role
        } = results[0]

        const token = jwt.sign({id: user_id, username: username, role: role}, process.env.APP_SECRET, {expiresIn: '7d'})
        const set = await query(`
            UPDATE auths SET token = ?
            WHERE username = ?
        `, [token, username])
        if (set.affectedRows !== 1) res.json({data: null})
        results[0].token = token
        let response = {
            user_id: user_id,
            token,
            role
        }
        return res.json({data: response})
    } catch (e) {
        res.status(500).json({ data: e.message })
    }
}

export default handlerAuthLogin
