import knex from 'knex'
import path from 'path'


const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: 'src/database/database.sqlite'
    },
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
    useNullAsDefault: true,
})


export default connection