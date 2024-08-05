const BlogPost = require('./BlogPost');
const Comments = require('./Comments');
const User = require('./User');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});


User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id'
})
BlogPost.hasMany(Comments, {
    foreignKey: 'blogpost_id'
});

module.exports = {User, BlogPost, Comments}