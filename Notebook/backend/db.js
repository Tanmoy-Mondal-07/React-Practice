const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/?directConnection=true"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>
        console.log("done")).catch((e)=>console.log(e.massage))
}
module.exports= connectToMongo;