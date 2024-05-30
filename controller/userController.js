const USER_SCHEMA=require("../models/user")

exports.createUser=async (req, res) => {
    try {
        let payload=req.body;
        await USER_SCHEMA.create(payload)
        res.status(201).send({message:"ok",payload})
    } 
    catch (err) {
        console.log(err);
    }
};


exports.fetchAll=async (req, res) => {
    try {
        let payload=await USER_SCHEMA.find()
        if (payload.length==0) {
            res.status(400).send({ message: "data not found" });
          }
        res.status(201).send({message:"data fetch successfully",payload})
    } 
    catch (err) {
        console.log(err);
    }
};
