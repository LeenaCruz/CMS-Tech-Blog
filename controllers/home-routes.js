const router = require('express').Router();
const { BlogPost, Comments, User } = require('../models');
// const {BlogPost} = require('../models');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
    try {
        const BlogPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const blogPosts = BlogPostData.map((blogpost) => blogpost.get({plain: true}));
        res.render('homepage', {blogPosts});

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
    // const blogPostData = await BlogPost.findAll().catch((err) => {
    //     res.json(err);
    // });
    // const blogPosts = blogPostData.map((blogpost) => blogpost.get({plain: true}));
    // res.render('homepage', {blogPosts});
});

// Login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });
  
module.exports = router;