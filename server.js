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
	app.listen(5000)
	console.log('Server Started at 5000')
	console.log("Database Connected")
	//console.log(response)
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


//Templating engine. Im using ejs. i can decide to use pug instead
app.set("view engine", "ejs")




app.use(route)


