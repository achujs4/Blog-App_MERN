const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    blogTitle : String,
    blogImageUrl : String, 
    blogDescription : String
})

const blogData = mongoose.model('blog',blogSchema);

module.exports = blogData;