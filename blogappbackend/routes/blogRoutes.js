const express = require('express');

const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({extended:true}))

const jwt = require('jsonwebtoken')

const blogModel = require('../model/blogData')



function verifytoken(req,res,next){
    // extracting the token from headers
    let token = req.headers.token;
    try {
        if(!token) throw 'Unauthorized access'
        else{
            let payload =jwt.verify(token,'blogApp');
            if(!payload) throw 'Unauthorized access';
            next();
            //if there is no issue s in varify token then move on to next issues
        }
        
    } catch (error) {
        console.log(error)
        
    }

}




//get 
router.get('/blogs',verifytoken,async(req, res)=>{
    try {
        const data = await blogModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('Data not found');       
    }
})

//post
router.post('/addblog',verifytoken, async(req, res)=>{
    try {
        const item = new blogModel(req.body);
        const savedItem = await item.save();
        res.status(200).json(item)
      
        
    } catch (error) {
        res.status(404).send('Post Unsuccessful')
        
    }
})

//put
router.put('/editblog/:id',verifytoken, async(req, res)=>{
    try {
        const  data = await blogModel.findByIdAndUpdate(req.params.id, req.body) 
        res.status(200).send({message:'Update Successful'})
        
    } catch (error) {
        res.status(404).send('Update Unsuccessful')
      
    }
})

//delete
router.delete('/deleteblog/:id', async(req, res)=>{
    try {
        const data = await blogModel.findByIdAndDelete(req.params.id)
        if(data){
        
            res.status(200).send('Delete Successful')
        }
    } catch (error) {
        res.status(404).send('Delete Unsuccessful')
        
    }
})


module.exports = router;