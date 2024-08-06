const {BlogPost} = require('../models');

const blogPostData = [
    {
        title: 'Cancion de Luna',
        content: 'Luna Lunita Lunera',
        date_created: 'April 20, 2021 07:00:00',
        user_id: 1
    },
    {
        title: 'Otro titulo',
        content: 'Soy otro blogpost',
        date_created: 'December 22, 2020 11:00:00',
        user_id: 2
    },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;