import path from 'path'

module.exports = {
    client: 'pg',
    connection: {
        host: 'salt.db.elephantsql.com',
        user: 'ekkqtnev',
        password: '3Vk5ua3rFolCYbOIXqBjL4TnDByqUjKN',
        database: 'ekkqtnev'
    },
    useNullAsDefault: true,
    migrations: {
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'database', 'seeds')
    }
}