const express = require("express")
const app = express()
const port = process.env.port || 8888


app.listen(port, () => {
    console.log(`server is running on ${port} value`)
})