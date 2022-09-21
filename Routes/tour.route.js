const express = require('express')
const { getTourCheapest, 
   postTourData, 
   getAllTour, 
   deleteItem, 
   getById, 
   updateData} = require('../Controller/tour.controller')
const router = express.Router()


router.route('/')
   .get(getTourCheapest)
   .post(postTourData)

router.route('/showAll')
.get(getAllTour)

router.route('/showAll/:id')
.get(getById)
.delete(deleteItem)
.patch(updateData)


module.exports = router