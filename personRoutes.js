let express = require('express');
let router = express.Router();
let Person = require('./person');

router.post('/', async(req,res)=>{
    try{
        let data = req.body;
        let newPerson = new Person(data);
        let respone = await newPerson.save();
        console.log('data save');
        res.status(200).json(respone);
    }
    catch(err){
        res.status(500).json({err: 'internal server error'});
    }
})

router.get('/', async(req,res)=>{
    try{
        let data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({err: 'internal server error'});
    }
})
router.get('/:work', async(req, res)=>{
    try{
        let workType = req.params.work;

        if(workType === 'dev' || workType === 'tester' || workType === 'client'){
        let response = await Person.find({work:workType});
        console.log("data fetch");
        res.status(200).json(response); 
    }
    else{
        res.status(404).json({err: 'invalid work error'});
    }
}
    catch(err){
        console.log(err);
        res.status(500).json({err: 'internal server error'});
    }
})

router.put('/:id', async(req, res) => {
    try{
        let personId = req.params.id;
        let updatePersonData = req.body;
        let response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new:true,
            runValidators:true
        });

        if(!response){
            res.status(404).json({err: 'person not found'});
        }
        console.log("data updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: 'internal server error'});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        let personId = req.params.id;
        
        let response = await Person.findByIdAndDelete(personId)

        if(!response){
            res.status(404).json({message:'person deleted successfully'});
        }
        console.log("data deleted");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: 'internal server error'});
    }

})
module.exports = router
