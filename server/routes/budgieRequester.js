// file that contains route that provides data when requested
import express from 'express' 
import path from 'path' // path module provides utilities for working with file and directory paths. 
import { fileURLToPath } from 'url' // fileURLToPath is a utility function that converts a file URL to a file path. 
import burds from '../data/budgieData.js'
import BudgiesController from '../controllers/budgies.js'

const __filename = fileURLToPath(import.meta.url) //import.meta.url is a special property that contains the URL of the current module file.  
const __dirname = path.dirname(__filename)

const router = express.Router() 

router.get('/', (req, res) => {
    res.status(200).json(burds)
})

router.get('/:budgieId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/budgies.html'))
})

router.get('/', BudgiesController.getBudgies)

export default router