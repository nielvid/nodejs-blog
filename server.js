const express = require('express');
const app = express();
const route = require("./routes/Router")
const mongoose = require('mongoose')
const path = require('path')
const session = require('express-session')//Express session middleware
const flash = require('connect-flash')




var url = "mongodb://localhost:27017/blog";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then((response)=>{
	app.listen(port || 3000)
	console.log('Server Started at port or 3000')
	console.log("Connected to database")
	
})
.catch((err)=>console.log(err))


app.use(express.urlencoded({extended: false}) )
app.use(express.static(path.join(__dirname, "public",)))


app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  //cookie: { secure: true }
}))

//Express messages middleware

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


//Templating engine is ejs. 
app.set("view engine", "ejs")


var port = process.env.PORT;

app.use(route)


