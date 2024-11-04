const  posts = require('../data/posts.js')

const index = (req, res) =>{
    const responseData = {
        data:posts,
        count: posts.length
    }
    res.status(200).json(responseData)
}



  module.exports = {
    
    index
  }