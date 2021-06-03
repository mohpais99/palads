const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.development')

require('dotenv').config({ path: envPath })

const {query} = require('../libs/db');

// Create "users" table if doesn't exist
// async function migrate() {
//     try {
//         await query(`
//             CREATE TABLE IF NOT EXISTS users (
//                 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
//                 ktp VARCHAR(255) NULL,
//                 first_name VARCHAR(255) NOT NULL,
//                 last_name VARCHAR(255),
//                 no_telp VARCHAR(13),
//                 gender ENUM('M','F') DEFAULT NULL,
//                 pod VARCHAR(50),
//                 bod DATE,
//                 address TEXT,
//                 created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
//                 updated_at 
//                     TIMESTAMP 
//                     NOT NULL 
//                     DEFAULT CURRENT_TIMESTAMP 
//                     ON UPDATE CURRENT_TIMESTAMP,
//                 PRIMARY KEY(id)
//             )
//         `)
//         console.log('migration ran successfully')
//     } catch (e) {
//         console.error('could not run migration, double check your credentials.')
//         console.log(e);
//         process.exit(1)
//     }
// }

/* Create "auths" table if doesn't exist */
async function migrate() {
    try {
        await query(`
            CREATE TABLE IF NOT EXISTS auths (
                id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                user_id INT UNSIGNED NOT NULL REFERENCES users(id),
                email VARCHAR(255) NOT NULL,
                username VARCHAR(255),
                password VARCHAR(255),
                token VARCHAR(255),
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at 
                    TIMESTAMP 
                    NOT NULL 
                    DEFAULT CURRENT_TIMESTAMP 
                    ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (id)
            )
        `)
        console.log('migration ran successfully')
    } catch (e) {
        console.error('could not run migration, double check your credentials.')
        console.log(e);
        process.exit(1)
    }
}

migrate().then(() => process.exit())
