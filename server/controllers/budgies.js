//file to store the controller functions to perform CRUD operations associated with the gifts table
import { pool } from '../config/database.js'

const getBudgies = async (req, res) => {
    try{
        //query to the database to request all rows of data from the budgies table
        const results = await pool.query('SELECT * FROM budgies ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch {
        res.status(409).json( { error: error.message} )
    }
}

export default {
    getBudgies
}