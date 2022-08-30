
const express = require("express");
const app = express();

const productRouter = require('./router/products');
const userRouter = require('./router/userRouters')

const cartRouter = require('./router/cartRouter');

const cors = require('cors')
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 4000;

dotenv.config();

app.set('view engin' , 'ejs');
app.use(express.json());
app.use(cors())
app.use('/product' , productRouter) ;
app.use('/user' , userRouter);
app.use('/cart' , cartRouter);

app.get("/", (req, res) => {
     
  res.render("index.ejs");
});

app.get("*", (req, res) => {
  res.send("page not found");
});




  mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    app.listen(PORT , ()=>{
      console.log("mongodb connected...")
    });
  }).catch((error)=> {
    console.log("error -------> " , error);
  })
  








