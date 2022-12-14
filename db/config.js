module.exports = {
    mariaDB: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '',
            database: 'challenge_ch_db'
        }
    },
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: './db/sqlite/ecommerce.sqlite'
        },
        useNullAsDefault: true
    }
}