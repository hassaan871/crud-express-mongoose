const express = require('express');
const {connectMongoDB} = require('./connection');
const userRouter = require('./routes/user');
const { logReqRes } = require('./middlewares');

const app = express();
const port = 8000;

//Connection
connectMongoDB('mongodb://127.0.0.1:27017/learning')
.then(()=> console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error" , err))

//Middlewares
app.use(express.urlencoded({extended: false}))
app.use(logReqRes("log.txt"))

//Routes
app.use('/api/users',userRouter )

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
