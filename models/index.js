const BlogPost = require('./BlogPost');
// const Comments = require('./Comments');
const User = require('./User');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// User.hasMany(Comments, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

module.exports = {User, BlogPost}