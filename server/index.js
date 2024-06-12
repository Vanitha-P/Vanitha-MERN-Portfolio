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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const origins = [process.env.HOST1, process.env.HOST2, "https://vanitha-mern-portfolio-server.onrender.com/", process.env.HOST3];
app.use(cors({
  origin: (origin, callback) => {
    if (origins.includes(origin)) {
      console.log(origin, origins)
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ['Content-Type']
}));

const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});
// ****** SEND API
app.post("/send", emailSendController.emailSend);
app.listen(port, () => {
  console.log(`server runnig on: ${port} port`);
});