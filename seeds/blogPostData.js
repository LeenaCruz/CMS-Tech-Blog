const {BlogPost} = require('../models');

const blogPostData = [
    {
        title: 'Leena',
        content: 'Luna Lunita Lunera',
        date_created: 'April 20, 2021 07:00:00',
    },
    {
        title: 'Otro titulo',
        content: 'Soy otro blogpost',
        date_created: 'December 22, 2020 11:00:00',
    },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;