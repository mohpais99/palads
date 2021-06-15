import bcrypt from 'bcryptjs';
var {query} = require('/libs/db');

const handlerAuthRegist = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const salt = bcrypt.genSaltSync(10);
        const data = req.body
        const results = await query(`
            INSERT INTO users (first_name, last_name, no_telp)
            VALUES (?, ?, ?)
        `, [data.first_name, data.last_name, data.no_telp])
        if (results.affectedRows !== 1) res.status(500).json({data: 'Failed!'})

        const password = bcrypt.hashSync(data.password, salt)
        const i_auth = await query(`
            INSERT INTO auths (user_id, role, email, username, password, status) 
            VALUES (?, ?, ?, ?, ?, ?)
        `, [results.insertId, 'member', data.email, data.username, password, 0]) 
        if (i_auth.affectedRows !== 1) res.status(500).json({data: 'Failed!'})
        return res.json({data: results.affectedRows})
    } catch (e) {
        console.log(e);
        res.status(500).end()
    }
}

export default handlerAuthRegist;
