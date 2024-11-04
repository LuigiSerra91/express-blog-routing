const  posts = require('../data/posts.js')
const fs = require('fs')
const index = (req, res) =>{
    let markup = ''

    posts.forEach(post => {
        const { title, slug, content, image, tags } = post;

        markup += `
           <ul>
            <li>
                <h2>${title}</h2>
                <h3>${slug}</h3>
                <h4>${content}</h4>
                <img src="/img/${image}"</img> <br>
                <span>${tags}</span>
            </li>
          </ul>  
        `
    });

     res.send(markup)
}

const show = ('/posts/:slug', (req, res) => {
    const post = posts.find(post => post.slug === req.params.slug)
    console.log(post);
    
     res.json({
      data: post
    })
  })

  const store = (req, res) => {
    
    const postTwo = {
      ...req.body

    }

    fs.writeFileSync('./data/posts.js', `module.exports = ${JSON.stringify(posts, null, 4)}`)

    posts.push(postTwo)

    

    
    res.json({
        data: posts,
    })
  }

  module.exports = {
    index,
    show,
    store
  }