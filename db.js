let mongoose = require('mongoose');//database config
//
// let mongoURL = 'mongodb://127.0.0.1:27017/first'
let mongoURL = 'mongodb+srv://kedarsutar2001:Kedar555@data.agnzns1.mongodb.net/'
//

mongoose.connect(mongoURL, {
  useNewUrlParser: true,//latest mongoosedb saved database
  useUnifiedTopology: true//structure data store data
});

let db = mongoose.connection;

db.on('connected', () =>{
    console.log("database connected");
})

db.on('error', (err) =>{
    console.log("mongodb error",err);
})

db.on('disconnected', (err) =>{
    console.log("database disconnected");
})
//db.close()
module.exports = db


