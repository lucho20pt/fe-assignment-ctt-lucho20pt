const express = require('express')
const path = require('path')
const cors = require('cors') // Import CORS middleware

const app = express()
const PORT = 8081

app.use(cors()) // Enable CORS
app.use('/api', express.static(path.join(__dirname, 'api')))

app.use((err, req, res, next) => {
  console.error('Server error:', err) // Debugging log
  res.status(500).send('Internal Server Error')
})

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
