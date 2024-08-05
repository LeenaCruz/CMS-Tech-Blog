const router = require('express').Router();
const { BlogPost, Comments } = require('../models');
// const {BlogPost} = require('../models');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
    // try {
    //     const BlogPostData = await BlogPost.findAll({
    //         include: [
    //             {
    //                 model: Comments,
    //                 attributes: []
    //             }
    //         ]
    //     })
    // }
    const blogPostData = await BlogPost.findAll().catch((err) => {
        res.json(err);
    });
    const blogPosts = blogPostData.map((blogpost) => blogpost.get({plain: true}));
    res.render('homepage', {blogPosts});
});

module.exports = router;