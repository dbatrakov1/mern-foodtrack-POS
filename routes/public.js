const express = require("express")
const router = express.Router()
const {getAllFillings} = require('../controllers/public')

//get all fillings
router.route("/getallfillings").get(getAllFillings)

module.exports = router