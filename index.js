const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000;
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// http://localhost:4000/api/test-pipeline
app.get('/api/test-pipeline', (req, res) => {
    res.send("hello world test pipeline")
})

app.listen(PORT, (req, res) => {
    console.log("server is running on port 4000")
})