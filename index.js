const express = require ("express")
const PORT = 8001

const app = express()

app.listen(PORT, ()=> `Server is running on port: ${PORT}`)