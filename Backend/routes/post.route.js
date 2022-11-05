const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  addPost,
  addReview,
  editPost,
  deletePost,
  getPostDetails,
  getAllPostsNGO,
  showInterest,
} = require("../controllers/post.controller");
const { protect } = require("../middlewares/authMiddleware");

router.get("/getAllPosts", protect, getAllPosts);
router.post("/getPostDetails", protect, getPostDetails);
router.put("/editPost", protect, editPost);
router.post("/addPost", protect, addPost);
router.post("/addReview", protect, addReview);
router.delete("/deletePost", protect, deletePost);
router.post("/getAllPostsByNGO", protect, getAllPostsNGO);
router.post("/showInterest", protect, showInterest);

module.exports = router;
