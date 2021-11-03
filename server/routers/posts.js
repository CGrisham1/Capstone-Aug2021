const { Router } = require("express");
const post = require("../models/post");
const router = Router();


// Create record in MongoDB
router.post("/", (request, response) => {
  const newPost = new post.model(request.body);
  newPost.save((err, post) => {
    return err ? response.sendStatus(500).json(err) : response.json(post);
  });
});
// Get all post records
router.get("/", (request, response) => {
  post.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
// Get a post by ID
router.get("/:id", (request, response) => {
  post.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
// Delete a post by ID
router.delete("/:id", (request, response) => {
  post.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
// Update a post by ID
router.put("/:id", (request, response) => {
  const body = request.body;
  post.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        title: body.title,
        post: body.post
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});
module.exports = router;









