import express from 'express' // import express
import budgieRouter from './routes/budgieRequester.js'

const app = express() // create express app

app.use('/public', express.static('./public')) // to server static files from the public directory 
app.use('public', express.static('./public/scripts'))
app.use('/budgies', budgieRouter)

// we define a route for the Root URL of the server with parameters req and res. We can check if server is functionable quickly when start
app.get('/', (req, res) => {
    res.status(200).send('<h1>This is the budgie server 🦜</h1>')
}) 

// process.env.PORT refers to a PORT environment variable. server will check if there is a PORT environment variableand use the 3002 otherwise. 
// In many production environments, the server doesn't get to decide which port it listens on - instead, it's assigned a port by the environment, and the server needs to be able to find
// out what that port is and use it.
const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log(`This is the budgie server at port ${PORT}. Hi 🕊️`)
})