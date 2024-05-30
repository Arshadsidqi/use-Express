const { Router } = require("express");
const { createList, fetchOne, fatchLists, updateList, deleteListItem } = require("../controller/listControlLer");
const { updateOne } = require("../models/list");
const router = Router();
router.post("/create", createList);
module.exports = router;
router.get("/all",fatchLists)
router.get("/fetch/:id",fetchOne)
router.patch("/update/:id",updateList)
router.delete("/delete/:id",deleteListItem)
