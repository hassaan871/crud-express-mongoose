const express = require('express');
const {connectMongoDB} = require('./connection');
const userRouter = require('./routes/user')

const app = express();
const port = 8000;

//Connection
connectMongoDB('mongodb://127.0.0.1:27017/learning')
.then(()=> console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error" , err))

//Middlewares
app.use(express.urlencoded({extended: false}))


//Routes
app.use('/api/users', )

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
