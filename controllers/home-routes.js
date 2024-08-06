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
        const blogPosts = BlogPostData.map((blogpost) => blogpost.get({ plain: true }));
        res.render('homepage', { 
            blogPosts,
            loggedIn: req.session.loggedIn
         });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.get('/dashboard', async (req, res) => {
    if(req.session.loggedIn) {
    try {
        const BlogPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
            where: {
                user_id: req.session.user_id
            }
        });
        console.log(req.session.user_id)
        const blogPosts = BlogPostData.map((blogpost) => blogpost.get({ plain: true }));
       console.log(blogPosts);
     
        res.render('dashboard', { 
            blogPosts,
            loggedIn: req.session.loggedIn
         });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    } 
    // const blogPostData = await BlogPost.findAll().catch((err) => {
    //     res.json(err);
    // });
    // const blogPosts = blogPostData.map((blogpost) => blogpost.get({plain: true}));
    // res.render('homepage', {blogPosts});
}else{
    res.redirect("/login");
}
});


//Get Create BlogPost Form
router.get('/blogpost', async (req, res) => {
    res.render('blogpost', {
        loggedIn: req.session.loggedIn
    });
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


router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('signup');
});


module.exports = router;