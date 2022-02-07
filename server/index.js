const express = require("express");
const app = express();
const cors= require("cors");
const pets= require('./routes/pets');
const connection = require("./db");

//connect mongodb
connection();

app.use(express.json());
app.use(cors());
app.use('/api', pets);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));