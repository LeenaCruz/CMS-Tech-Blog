const router = require('express').Router();
const { BlogPost } = require('../../models');

// Create New Post

router.post('/', async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.create({
            title: req.body.title,
            content: req.body.content,
            date_created: Date.now(),
            user_id: req.session.user_id
        });
        res.status(200).json(dbBlogPostData);
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;