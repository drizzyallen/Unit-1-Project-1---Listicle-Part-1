//server directory needs to read .env file to use values for database configuration
//Thanks to dotenv package, it allows us to load environment variables from a .env file into process.env
//this way we, developers, can store sensitive information, like db creds, API keys, and other config options, in a separate file 
//that is not committed to the  verison control.
import dotenv from 'dotenv'
dotenv.config({ path: '../.env'})