import express from 'express'
import mongoose from 'mongoose'
import configureRoutes from './routes/routes-config.js'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'


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
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/dist'));
  console.log(path)
  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','dist','index.html'));
  })
}
app.listen(port, (err) => {
  if (err) console.error(err)
  console.log(`server started at port ${port}`)
})
