const express = require("express");
const { PORT } = require("./config");
const connectDB = require("./config/database");
const listrouter=require("./router/listrouter")
const userRouter=require("../Todolist/router/userRouter")

const app = express();
let startServer = async () => {
  // database connection
  connectDB();
  //middleware
  app.use(express.json());
  app.use("/list", listrouter);
  app.use("/userList", userRouter);
  

  // listen server

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server running at http://localhost:${PORT}`);
  });
};
startServer();
