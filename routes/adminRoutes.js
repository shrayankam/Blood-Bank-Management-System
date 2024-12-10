const express = require("express");
const authMiddleware = require('../middlewares/authMiddleware');
const { getDonorsListController, getHospitalListController, getOrgListController, deleteDonorController } = require("../controller/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const router=express.Router()

//Routers
router.get('/donor-list',authMiddleware,adminMiddleware ,getDonorsListController)

router.get('/hospital-list',authMiddleware,adminMiddleware ,getHospitalListController)
router.get('/org-list',authMiddleware,adminMiddleware ,getOrgListController)
router.delete('/delete-donor/:id',authMiddleware,adminMiddleware,deleteDonorController)

module.exports = router;