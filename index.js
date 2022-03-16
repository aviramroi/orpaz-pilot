'use strict'
const cors = require("cors");
const path = require('path');
const express = require('express');
const API_PORT = process.env.PORT || 3001;
const router = express.Router();
const app = express();
const mongoose =require('mongoose');
var bodyParser = require("body-parser");

app.use(cors());
app.set("trust proxy", true);
app.use(bodyParser.json({ limit: "5mb", type: "application/json" }));
app.use('/api', router);
app.use("/api/forms", require("./routes/form"));

const dbRoute = require('./config/keys').mongoURI;


mongoose.connect(dbRoute, {
  useNewUrlParser: true ,
   useUnifiedTopology: true,
 });

let db = mongoose.connection;


db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


router.get('/',(req,res)=>{
    res.send({response:"i am alive"}).status(200);
  })

app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(API_PORT,()=>{
    console.log("server is runing on port ",API_PORT)
})