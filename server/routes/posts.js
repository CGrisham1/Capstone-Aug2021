const { Router } = require("express");
const post = require("../models/Post");
const router = Router();

// Create record in MongoDB
router.post('/', (request, response) => {
    const newPost = new post.model(request.body);
    newPost.save((err, post) => {

      return err ? response.sendStatus(500).json(err) : response.json(post);
    });
  });


// Delete a post by ID
router.delete('/:id', (request, response) => {
    post.model.findByIdAndRemove(request.params.id, {}, (error, data) => {

      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    });
  });


module.exports = router;