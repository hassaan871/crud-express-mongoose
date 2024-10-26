const express = require('express');
const {connectMongoDB} = require('./connection');

const app = express();
const port = 8000;

connectMongoDB('mongodb://127.0.0.1:27017/learning')
.then(()=> console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error" , err))

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
