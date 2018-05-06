const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

//Routes

var companyController = require("./server/controllers/companyController");
var router = new express.Router();

router.get("/api/company", companyController.findAll);

router.post("/api/company", companyController.create);

router.get("/*", function(req, res) {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

router.delete("api/company", companyController.findById);

app.use(router);

//mongo DB connection

const db = process.env.MONGODB_URI || "mongodb://localhost/CompanyList";
mongoose.connect(db, function(error) {
    if(error) {
        console.log(error);
    }
    else {
        console.log("You are connected");
    }
});

//start server

app.listen(PORT, function() {
    console.log(`Server is now listening on PORT ${PORT}`)
});