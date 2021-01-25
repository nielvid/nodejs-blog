/**
 * This is my route file
 * Handles all the route handlers
 */

const express = require("express");
const route = express.Router();

const  ArticleModel = require('../Models/Database'); //Database logic
const Subscriber = require('../Models/Newsletter'); // Database for Newsletter
const Controller = require('../Controllers/Controllers'); //controller functions for the routers
const { Router } = require("express")

const Validate = require('../Controllers/Validate');

route.get("/articles", Controller.indexPage)

route.get("/newpost", Validate , Controller.CreateBlogPost)

 //post a new blog to the database
 route.post('/add',  Validate , Controller.NewForm )
//route.post('/add', Controller.NewForm )

//get all the blogs in the database
route.get("/blog", Controller.allBlog)

//get a single blog post by id
 //route.get("/blog/:id", Controller.SingleBlog)

 //get a blog on title click 
 route.get("/post/:title", Controller.BlogTitle)

 //edit a post
 route.get('/edit/:id', Controller.EditPost)

 route.post('/edit/:id', Controller.Update)

 //delete a single blog post by id
 route.delete("/blog/:id", Controller.Delete)

 route.post('/signup', Controller.NewsLetter)
 



module.exports = route;