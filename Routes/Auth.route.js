const express = require('express')
const authRouter = express.Router()
const authS = require('../Models/Auth')

// middleware that is specific to this router

authRouter.get ('/',(req,res)=>{
    res.send("I am from authRouter.js")
})
// define the post router
authRouter.post('/p', async(req, res) => {
    const d = {
        title : "Herro" ,
        author : "Haseeb"
    }
  let a =  new authS(d)
  a.save()
  res.send('Created the db')
})
// define the about route
authRouter.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = authRouter