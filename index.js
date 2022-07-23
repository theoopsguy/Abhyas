import express from 'express'
import mongoose from 'mongoose'
import configureRoutes from './routes/routes-config.js'
import 'dotenv/config'
import cors from 'cors'
const app = express()

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('Connected to mongoDB')
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  )
  next()
})

app.use(express.json())

configureRoutes(app)

let port = process.env.PORT;
if (port == null || port == ""){
  port = 5000;
}

app.listen(port, (err) => {
  if (err) console.error(err)
  console.log('server started successfully')
})