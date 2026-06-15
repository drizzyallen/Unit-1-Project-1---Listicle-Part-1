import pg from 'pg' //importing pg from the pg package

//One common way to connect to a Postgres database is using a .....
//connection pool. It is a cache of database connections maintained so that the connections can be reused
//when needed, rather than being opened and closed for each database transaction

//first lets make a cofniguration object and pass it to the pg.Pool constructor.

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: { // ssl configuration to allow for self-signed certificates
        rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config) //pool object that is pg.Pool with config object settings we made and we will export this

