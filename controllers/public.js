const Filling = require("../models/Filling")
// const ObjectId = require('mongodb').ObjectId;
 
//get all fillings
// /api/public//getallfillings
exports.getAllFillings = async(req,  res, next) => {
    try {
        const fillings = await Filling.find();
        res.status(200).json(fillings)
    } catch (error) {
        console.log(error)
    }
}