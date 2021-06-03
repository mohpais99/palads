const path = require('path')
const mysql = require('serverless-mysql');
const envPath = path.resolve(process.cwd(), '.env.development')
require('dotenv').config({ path: envPath })

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD
    }
})

module.exports = {
    conn: async () => {
        return db
    },
    query: async (q, values) => {
        try {
            const conn = db
            var results = await conn.query(q, values)
            await conn.end()
            return results
        } catch (e) {
            throw Error(e.message)
        }
    }
}

// export const db = mysql({
//     config: {
//         host: process.env.MYSQL_HOST,
//         database: process.env.MYSQL_DATABASE,
//         user: process.env.MYSQL_USERNAME,
//         password: process.env.MYSQL_PASSWORD
//     }
// })

// export async function qSQL(q, values) {
//     try {
//         // const results = await db.query(q, values)
//         // await db.end()
//         return 'results'
//     } catch (e) {
//         throw Error(e.message)
//     }
// }


// import mysql from 'serverless-mysql';

// export const db = mysql({
//     config: {
//         host: process.env.MYSQL_HOST,
//         database: process.env.MYSQL_DATABASE,
//         user: process.env.MYSQL_USERNAME,
//         password: process.env.MYSQL_PASSWORD
//     }
// })

// export async function qSQL(q, values) {
//     try {
//         // const results = await db.query(q, values)
//         // await db.end()
//         return 'results'
//     } catch (e) {
//         throw Error(e.message)
//     }
// }
