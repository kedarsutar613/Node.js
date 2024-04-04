// var _ = require('lodash');
// let data=["abc","xyz",1,23,55,66,88,'name','age',59]
// let things =_.uniq(data)
// console.log(things);
///////////////////////////////////////////////////////////
// var _=require('lodash');
// let things = _.isString(true) //check string or number
// console.log(things);
////////////////////////////////////////////////////////


// let a =`{"name":"abc","age":22,"city":"ABC"}`
// let b=JSON.parse(a);
// console.log(b.name);
// console.log();
/////////////////////////////////////////////////////////


// let a ={name:"abc",age:22,city:"ABC"}
// let b=JSON.stringify(a);
// console.log(b);
// console.log(typeof(b));

///////////////////////////////////////////////////////////////

// const express = require('express')
// const students=require('./student')
// const app = express()
// app.use(express.json())

// app.use(function(req,res,next){

// })
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get('/:user1', function (req, res) {
//   res.send(`Hello ${req.params}`)
// })

// app.get('/user', function (req, res) {
//     res.send('Hellooo User How are you')
//   })
// app.get('/data', function (req, res) {
//    let ob={
//     name:"abc",
//     last:"xyz",
//     age:22,
//     pno:455
//    }
//    res.send(ob)
//   })

//   app.get('/students', function (req, res) {
//     res.json(students)
//   })

//   app.post('/api/student', function(req,res){
//     res.send("data added")
//   })

// app.listen(3000,()=>{
//     console.log('server startead');
    
// })

////////////////////////////////////////////////////////////////////////

// const express = require('express')
//     let students = require('./student')
//     const app = express()


//     app.use(express.json())


//     app.get('/', function (req, res) {
//     res.send('Hello World')
//     })

//     app.get('/students', function (req, res) {
//         res.json(students)
//         })
  //         app.post('/api/students', function (req, res) {
  //             console.log(req.body);
  //             res.send('data added')
  //             })


//     app.listen(3000, ()=>{
//         console.log("server started");
//     })
///////////////////////////////////////////////////////

// let students =  require('./student')
// let express = require('express')
// let app = express()

// app.use(express.json())

// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })
  
//   app.get('/student', function (req, res) {
//     res.json(students)
//   })

//   app.post('/api/student', function (req, res) {
//     let user = {
//     id: students.length+1,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     gender: req.body.gender
//     }
//     students.push(user)
//     res.send('data added')
//   })
//   app.put('/api/student/:id',function(req,res){
//     let id = req.params.id
//     let first_name = req.body.first_name
//     let last_name =req.body.last_name
//     let email = req.body.email
//     let gender = req.body.gender
//     let index = student.findIndex((student)=>{
//       return(student.id == Number.parseInt(id))
//     })
//     console.log(id, req.body, index);

//     if(index >= 0){
//       let a = student[index]
//       a.first_name = first_name
//       a.last_name =last_name
//       a.email = email
//       a.gender= gender
//     }
//     else{
//       res.status(404)
//       res.end()
//     }
//     console.log(id);
//     res.json(id)
//     })
//   app.listen(3000,()=>{
//     console.log("server started");
//   })

/////////////////////////////////EJS/////////////////////////////
// let students =  require('./student')
// let express = require('express')
// let db = require('./db')
// let Person = require('./person')
// let app = express()

// app.use(express.static('./public'));  

// app.use(express.json())
// app.set("view engine", "ejs")

// app.get('/', function (req, res) {
//   res.send("done")
// })
// app.post('/person', function (req, res) {
//   let data= req.body
//   let newPerson = new Person(data)//mongoose model
//   newPerson.save((err, savedPerson)=>{//mongodb moder thour 
//     if(err){
//       console.log('Error in saving the data:',err)
//       res.status(500).json({err:'internal sever error'})//server error
//     }
//   else{
//       console.log('data saved successfully')
//       res.status(200).json(savedPerson)
//     }
  
// })
// })using callback = function

//   app.listen(3000,()=>{
//     console.log("server started");
//   })
//////////////////////////////////////////////////////////////////////////

let students =  require('./student')
let express = require('express')
let db = require('./db')
let Person = require('./person')
let app = express()
app.use(express.static('./public'));  
app.use(express.json())
app.set("view engine", "ejs")

let logRequest = (req, res, next) => {
console.log(`[${new Date().toLocaleString()} Request: ${req.originalUrl}`);
next();
}

app.use(logRequest)
app.get('/',logRequest,(req, res ) => {
  res.send("done done done")
})

let personRoutes = require('./personRoutes')
app.use('/person', personRoutes)

app.get('/', (req, res)=> {
  res.send("done done done")
})
// app.get('/person', function (req, res) {
//   res.json(Person)
// });
// app.post('/person', async (req, res)  =>{
// try {
//   let data = req.body
//   let newPerson = new Person(data)
//   let respone = await newPerson.save();
//   console.log("data saved");
//   res.status(200).json(respone);
// }
// catch(err){
//   console.log(err);
//   res.status(500).json({err: 'internal server error'});
// }
// })

// app.get('/person', async(req,res)=>{
//   try {
//     let persons = await Person.find();
//     res.status(200).json(persons);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({err: 'internal server error'});
//   }
// })

////////////////////routing//////////////// 
// app.get('/person/:work', async(req,res)=>{
//   try {
//     let workType = req.params.work
//     if(workType=== 'dev' || workerType === 'tester' || workerType === 'client'){
//     let persons = await Person.find({work: workType});
//     res.status(200).json(persons);
//   }
//   else{ 
//     res.status(404).json({err: 'work type not found'});
//   }
// }
//   catch(err){
//     console.log(err);
//     res.status(500).json({err: 'internal server error'});
//   }
// })

  app.listen(3000,()=>{
    console.log("server started");
  })









































































