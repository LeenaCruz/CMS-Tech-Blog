const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
    {
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
title: {
    type: DataTypes.STRING,
    allowNull: false,
},
content: {
    type: DataTypes.TEXT,
    allowNull: false,
},
date_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
}, 
user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'user',
        key: 'id',
    },
},
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost',
    }
);




module.exports= BlogPost;