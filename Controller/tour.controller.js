const TourCreate = require('../Model/tour.model')

exports.getTourCheapest = async(req,res) =>{
    try {
       const data = await TourCreate.find({}).sort({price:0}).limit(3)
       const findId = await TourCreate.find({}).limit(6)
       
       res.status(200).json({
          status:'success',
          data1:data,
          data2:findId
       })
    } 
    catch (error) {
       res.status(400).json({
          status:'fail',
          message:'cannot get item',
          error:error
       })   
    }
 }

 exports.getAllTour = async(req,res) =>{
    try {
      const data = await TourCreate.find({})

      res.json({
        status:'success',
        allData:data

      })
    } 
    catch (error) {
       res.json({
        status:'fail',
        message: error
       }) 
    }
 }

 exports.deleteItem = async(req,res) =>{
    try {
        const id = req.params.id
        const result = await TourCreate.deleteOne({_id:id})
        res.json({
            status:'success',
            data: result
        }) 
    } 
    catch (error) {
        res.json({
            status:'fail',
            message:error
        })
    }

 }
 exports.getById = async(req,res) =>{
    try {
        const id = req.params.id
    const findID = await TourCreate.findById({_id:id})   
    res.json({
        status:'success',
        data:findID
    })
    } 
    catch (error) {
       res.json({
        status:'fail',
        message:error
       }) 
    }
    
 }

 exports.updateData = async (req,res) =>{
    try {
        const {id} = req.params
        const result = await TourCreate.updateOne({_id:id},{$set: req.body})
        
        res.json({
            status:'success',
            data: result
        })
    }
     catch (error) {
        res.json({
            status:'fail',
            message: error
        })
    }
    

 }

 exports.postTourData =  async(req,res) =>{
    try {
      const data = req.body
      const result = await TourCreate.create(data)
      console.log(result)
      res.status(200).json({
         status:'success',
         data: result
      })
    } 
    catch (error) {
       res.status(400).json({
         status:'fail',
         message:error
       })
    }
 }