const Filling = require("../models/Filling")
// const ObjectId = require('mongodb').ObjectId;

//
exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        sucess: true,
        data: "You got access to the private data in this route"
    })
}


//create new filling
//  /api/private/addfilling
exports.createFilling = async(req, res, next) => {
        try {
            await Filling.create({
                title: req.body.title,
                imglink: req.body.imglink,
                calories: req.body.calories,
                price: req.body.price,
                user: req.user.id,
             // createdAt: 
            });
            res.json({ msg: 'Filling created!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ err: 'Can not create filling!' });
        }
}

//delete filling
//  /api/private/deletefilling/:id
exports.deleteFilling = async(req, res, next) => {
    try {
        await Filling.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Filling deleted!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Can not delete filling!' });
    }
}

//update filling
//  /api/private/updatefilling/:id
exports.updateFilling = async(req, res, next) => {
    try {
        await Filling.findOneAndUpdate({ _id: req.params.id}, {
                title: req.body.title,
                imglink: req.body.imglink,
                calories: req.body.calories,
                price: req.body.price,
                user: req.user.id,
             // createdAt: 
        })
        res.json({ msg: 'Filling updated!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Can not update filling!' });
    }
}