import knex from 'knex'
import path from 'path'


const connection = knex({
    client: 'pg',
    connection: {
        host: 'salt.db.elephantsql.com',
        user: 'ekkqtnev',
        password: '3Vk5ua3rFolCYbOIXqBjL4TnDByqUjKN',
        database: 'ekkqtnev'
    },
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
    useNullAsDefault: true,
})


export default connection