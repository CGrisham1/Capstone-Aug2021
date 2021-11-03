const { Router } = require("express");
const post = require("../models/Post");
const router = Router();

// Create record in MongoDB

router.post('/', (request, response) => {
  const newPost = new post.model(request.body);
  newPost.save((err, posts) => {
    return err ? response.sendStatus(500).json(err) : response.json(post);
  });
});


  router.get('/', (response) => {
    const Post = new post.model.find();
    Post.save((err, post) => {
  
      return err ? response.sendStatus(500).json(err) : response.json(post);
    });
  });


// Delete a post by ID
router.delete('/:id', (request, response) => {
    post.model.findByIdAndRemove(request.params.id, {}, (error, data) => {

      if (error) return response.sendStatus(500).json(err);
      return response.json(data);
    });
  });


module.exports = router;

// router.post('/', (request, response) => {
//     const newPost = new post.model.create(request.body);
//     newPost(() => {
//       if (error)
//         return response.sendStatus(500).json(error);
//       return response.json({ data: { post: newPost } });
//     });
//   });