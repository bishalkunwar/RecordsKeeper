const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

//Set the Server Port.
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

//define root route.
app.get('/', (req, res) => {
    res.send("HELLO WORLD");
});

//import employee route.
const studentRoutes = require('./src/routes/student.route');

//create employee route.
app.use.require("/api/v1/students", studentRoutes);

//Port Listener.
app.listen(port, () => {
    console.log(`Express APP RecordsKeeper is running fine at port ${port}`);
});