import bcrypt from 'bcryptjs';

const handlerUser = async (req, res) => {
    if (req.method !== 'GET') return res.status(405).json({message: 'Method not allowed!'});
    try {
        const salt = bcrypt.genSaltSync(10);
        
        const password = bcrypt.hashSync('gunadarma', salt)
        return res.json({data: password})
    } catch (e) {
        console.log(e);
        res.status(500).end()
    }
}

export default handlerUser;
