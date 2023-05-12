const express = require("express")
const router = express.Router()
const {
    getPrivateData,
    createFilling,
    deleteFilling,
    updateFilling
        } = require('../controllers/private')
const {protect} = require("../middleware/auth")


router.route("/").get(protect, getPrivateData)

//create new filling
router.route("/createfilling").post(protect, createFilling)

//update filling
router.route("/updatefilling/:id").put(protect, updateFilling)

//delete filling
router.route("/deletefilling/:id").delete(protect, deleteFilling)

module.exports = router