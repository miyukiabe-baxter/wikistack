const express = require('express');
const app = express();
const morgan = require("morgan");
const main = require("./views/main");
const homepage = main();
// const { db } = require('./models');
 


app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + "public"));

app.get('/', (req, res) => {
  res.send(homepage);
  console.log('Hello Miyuki');
})

// db.authenticate().then(() => {
//   console.log('connected to database');
// })



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})