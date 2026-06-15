//create budgies table and load data we already have into the database
import { pool } from './database.js'
import './dotenv.js'
import budgieData from '../data/budgieData.js'

const createBudgiesTable = async () => {
    // SQL Query to drop the budgie table if exists and create a new 
    //table called budgie if it doesn't exist.
    const createTableQuery = `
        DROP TABLE IF EXISTS budgies;

        CREATE TABLE IF NOT EXISTS budgies (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            birthdayMonth VARCHAR(255) NOT NULL,
            age VARCHAR(10) NOT NULL,
            color VARCHAR(255) NOT NULL,
            gender VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery) //In try block we query the pool with the createTableQuery we just made above
        console.log('🕊️ budgies table created successfully')
    }
    catch (err) {
        console.error('❗ error creating budgies table', err)
    }
}
   
//Now lets send data/budgieData.js data over to the database
const seedBudgiesTable = async () => {
    await createBudgiesTable()
    budgieData.forEach((budgie) => {
        const insertQuery = {
            //SQL query to insert the values into the budgies table. The VALUES ($1..) are using parameterized queries or placeholders. This prevents SQL injections
            text: 'INSERT INTO budgies (name, birthdayMonth, age, color, gender, image) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            budgie.name,
            budgie.birthdayMonth,
            budgie.age,
            budgie.color,
            budgie.gender,
            budgie.image
        ]
        
        pool.query(insertQuery, values, (err, res) => {
            if(err) {
                console.error('❗error inserting budgie', err)
                return
            }

            console.log(`✅${budgie.name} added successfully`)
        })
    })
}

seedBudgiesTable()


