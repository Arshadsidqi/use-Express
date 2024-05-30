let {Router}=require("express");
const { createUser, fetchAll } = require("../controller/userController");
let router=Router()
router.post("/create",createUser)
router.get("/all",fetchAll)
 module.exports=router;