require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./Db/dataBase')
const authRouter = require('./Routes/Auth.route')
const app = express()
db()
// it is used to connect the cors pachage
app.use(cors())
app.use(express.json())

//it is used to connect the port
const port = process.env.PORT || 3000

// it is for the authRouter module
app.use('/auth',authRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})