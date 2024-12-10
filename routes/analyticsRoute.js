const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware');
const { bloodGroupDetailsContoller } = require('../controller/analyticsController');

const router = express.Router()

//routes
//GET ALL DONOR RECORDS
router.get('/bloodGroups-data',authMiddleware,bloodGroupDetailsContoller);


module.exports = router;