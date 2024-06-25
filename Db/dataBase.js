const mongoose = require('mongoose');

const db = async()=>{
    try {
         await mongoose.connect(process.env.DB)
         console.log("DataBase is connected")
    } catch (error) {
        console.log("error: " , error)
    }
}
module.exports = db