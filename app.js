require("dotenv").config();
const express = require('express');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

connectDB();


app.use("/api/users", userRoutes);


app.get("/",(req,res)=>{
    console.log("variying api");
    res.send("Hello, World!");
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}/`);
});