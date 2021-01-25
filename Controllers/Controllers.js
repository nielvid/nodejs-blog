const  ArticleModel = require('../Models/Database');
const  signup = require('../Models/Database');
const Subscriber = require('../Models/Newsletter');
const {  validationResult } = require('express-validator');




const indexPage = (req, res)=>{

    const Articles = [{
        title: 'Guard Clauses - The best way to write',
        createdAt: new Date().toUTCString(),
        body: "Have you always desired to write great article? In this tutorial, I;m going to introduce"
    },
    {
        title: 'Guard Clauses - The best way to write',
        createdAt: new Date().toUTCString(),
        body: "Have you always desired to wrrite great article? In this tutorial, I;m going to introduce"
    },
    {
        title: 'Guard Clauses - The best way to write',
        createdAt: new Date().toUTCString(),
        body: " babe Change always desired to wrrite great article? In this tutorial, I;m going to introduce"
    },
]

   res.render('index', {article : Articles})
    
}


const CreateBlogPost = (req, res)=>{
    res.render('new')
     
 }

//controller for posting new blog
const NewForm  =  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    
    const errors = validationResult(req);
  if (!errors.isEmpty()) {

    //res.render('new', {errors: errors})
  
    return res.json({ errors: errors.array() });
  }else{
        const article = new ArticleModel({
            title: req.body.title,
            description: req.body.desc,
            message: req.body.post
        })
        
        article.save()
        .then (response=>
           
            res.redirect('/blog')
            
    )
    .catch(err=> console.log(err)
        )
        req.flash('success', "New Post added")
    }
  }


        //Controller to get all blog
    const allBlog = (req, res)=>{
   
        ArticleModel.find().sort({_id: -1})
        .then((result)=>{
          
            const posts = result
            res.render('allpost',  {Blog: posts})
        })
        .catch(err=> console.log(err))
         
     
    }

    /*
    function SingleBlog(req, res){
        const id = req.params.id
        ArticleModel.findById(id)
        .then((result)=>{
            const blog = result
            res.render('single', {Blog: blog._id, BlogTitle: blog.title, BlogDesc : blog.description, BlogPost: blog.message, BlogDate: blog.createdAt})
        })
        .catch(err=> console.log(err))
         
     }
        */

     function BlogTitle(req, res){
        const title= req.params.title
        ArticleModel.findById(title)
        .then((result)=>{
            const blog = result
            res.render('single', { Blog: blog, BlogTitle: blog.title, BlogDesc : blog.description, BlogPost: blog.message, BlogDate: blog.createdAt})
        })
        .catch(err=> console.log(err))
         
     }


     //find to edit
     const EditPost = (req, res)=>{
        const id = req.params.id
        ArticleModel.findById(id)
        .then((result)=>{
            res.render('edit', {blog: result})
        })
        .catch(err=> console.log(err))
         
     }
        
     

     //update
     const Update = (req, res)=>{
        const article = {
            title: req.body.title,
            description: req.body.desc,
            message: req.body.post
        }
    
        let id = {_id:req.params.id}
        ArticleModel.update(id, article)
        .then (response=>
            res.redirect('/blog')
    )
    .catch(err=> console.log(err)
        )}


         //find to edit
     const Delete = (req, res)=>{
        const id = req.params.id
        ArticleModel.findByIdAndDelete({_id:id})
        .then((result)=>{
            res.json({ redirect: "/blog"})
    
        })
        .catch(err=> console.log(err))
         
     }

     const NewsLetter = (req, res)=>{
      
         const subscribe = new Subscriber({
            
              email: req.body
         })
         subscribe.save()
         .then (response=>
             res.redirect('/blog')
     )
     .catch(err=> console.log(err)
         )
         
        }


    module.exports =
    { indexPage, NewForm, allBlog, 
        CreateBlogPost, EditPost, Update, BlogTitle, Delete, NewsLetter}

        //SingleBlog, 