const express = require('express')
const cors = require('cors')
require('dotenv').config()
const data = require('./data')

const PORT = process.env.PORT

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/products', (req, res) => {
  res.status(200).json(data.products)
})

// Runs server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
