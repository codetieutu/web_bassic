const express = require('express')
const router = express.Router()
const { getHomePage, getCreatPage, login, getUpdatePage, update, deleteAcc } = require("../controllers/homeController")
// middleware that is specific to this router

router.get('/', getHomePage)

router.get("/creatPage", getCreatPage)
// router.get("/update", getUpdatePage)
router.get('/updatePage/:id', getUpdatePage)
router.post("/creat-user", login)
router.post('/update/:id', update)
router.post('/delete/:id', deleteAcc)

module.exports = router
