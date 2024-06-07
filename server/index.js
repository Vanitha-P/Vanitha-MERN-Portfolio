const express = require("express")
const dotenv = require("dotenv").config();
const emailSendController = require("./mailController.js")
const cors = require("cors")
const bodyParser = require("body-parser")
const multer = require("multer");
const app = express();
// Configure multer for handling form-data
const upload = multer();
app.use(upload.any());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    origin: `${process.env.HOST}`,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ['Content-Type']
}));

const port = process.env.PORT || 5000;
app.get('/mail', (req, res) => {
  res.send('Hello from the backend!');
});
// ****** SEND API
app.post("/mail/send", emailSendController.emailSend);
app.listen(port, () => {
  console.log(`server runnig on: ${port} port`);
});