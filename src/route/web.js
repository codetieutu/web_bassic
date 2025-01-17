const express = require('express')
const router = express.Router()
const { getHomePage, getCreatPage, login } = require("../controllers/homeController")
// middleware that is specific to this router

router.get('/', getHomePage)

router.get("/creatPage", getCreatPage)
router.post("/creat-user", login)

module.exports = router
