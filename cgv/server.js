const express = require("express");
const mongoose = require('mongoose');
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
app.get("/",function (req, res){
    return res.send("hello worlds");
});

mongoose.connect(
    process.env.MONGODB_URL ||
      'mongodb://web:1234@ac-vawkrgv-shard-00-00.kkvb2u9.mongodb.net:27017,ac-vawkrgv-shard-00-01.kkvb2u9.mongodb.net:27017,ac-vawkrgv-shard-00-02.kkvb2u9.mongodb.net:27017/?ssl=true&replicaSet=atlas-v76kxc-shard-0&authSource=admin&retryWrites=true&w=majority',
      console.log("mongo run")
  )

app.listen(port, hostname, function (){
    console.log('Server running at http://${hostname}:${port}/')
});