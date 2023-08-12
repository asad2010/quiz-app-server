const express = require('express')
const router = express.Router()
const controller = require("../controller/controller")

router.post("/auth/signup", controller.signup)
router.post("/auth/login", controller.login)

module.exports = router;