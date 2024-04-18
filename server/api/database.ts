import mysql, { Connection } from 'mysql2/promise'

export default defineEventHandler(() => {
    class Database {
        private connection: Connection | null

        constructor() {
            this.connection = null
            this.init()
        }

        async init() {
            this.connection = await mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'password',
                database: 'test',
            })
        }

        getConnection(): Connection {
            if (!this.connection) {
                throw new Error('Connection with the database is not established.')
            }
            return this.connection
        }
    }
    
    const db = new Database()
    const connection = db.getConnection()

    connection
})