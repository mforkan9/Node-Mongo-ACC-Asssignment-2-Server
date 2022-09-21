const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose');
const Tour = require('./Model/tour.model')

//Router
const tourCreateRoute = require('./Routes/tour.route')

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


//Database
mongoose.connect(process.env.MONGO_DATABASE_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName:'Tour-Management'
  })

//Database Posting
app.use('/api/tour',tourCreateRoute )



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})