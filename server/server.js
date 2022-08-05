const config = require("./config");


const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(config.port, () => {
    console.log(`Yey, your server is running on port ${config.port}`);
});