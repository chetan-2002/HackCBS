const Post = require("../models/post.model");
const User = require("../models/user.model");

//All routes are private routes in this file sojwt token is required

//route : http://localhost:5000/api/post/getAllPosts
//access : private
const getAllPosts = async (req, res) => {
  const posts = await Post.find({})
    .populate({
      path: "uploadedBy",
      select: "_id",
    })
    .select("-interested");

  res.status(200).json(posts);
};

//route : http://localhost:5000/api/post/getPostDetails
//access : private
const getAllPostsNGO = async (req, res) => {
  if (req.user.role !== "ngo") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const posts = await Post.find({ uploadedBy: req.user._id })
    .populate({
      path: "uploadedBy",
      select: "name email",
    })
    .populate({
      path: "reviews.user",
      select: "name email ",
    });

  res.status(200).json(posts);
};

//route : /api/post/getPostDetails
const getPostDetails = async (req, res) => {
  const { ngoId } = req.body;
  if (!ngoId) {
    return res.status(400).json({ message: "Please provide the ngoId" });
  }
  const user = await User.findById(ngoId).select(
    "-password -role -createdAt  -updatedAt -__v -yourInterest"
  );
  if (!user) {
    return res.status(404).json({ message: "NGO not found" });
  }
  return res.status(200).json(user);
};

//route : /api/post/addPost
const addPost = async (req, res) => {
  if (req.user.role !== "ngo") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const { title, area, workRequirement, timings } = req.body;
  const post = await Post.create({
    title,
    area,
    workRequirement,
    timings,
    uploadedBy: req.user._id,
  });

  if (!post) {
    return res
      .status(400)
      .json({ message: "Something went wrong while adding Post" });
  }
  res.status(200).json({ message: "Post added successfully" });
};

//route : /api/post/addReview
const addReview = async (req, res) => {
  if (req.user._id.valueOf() === req.body.ngoId) {
    return res.status(400).json({ message: "You cannot review yourself" });
  }
  const { ngoId, review } = req.body;
  if (!ngoId) {
    return res.status(400).json({ message: "Please provide the ngoId" });
  }
  if (!review) {
    return res.status(400).json({ message: "Please provide the review" });
  }
  const user = await User.findById(ngoId);
  if (!user) {
    return res.status(404).json({ message: "NGO not found" });
  }
  user.reviews.push({ user: req.user._id, review });
  await user.save();
  res.status(200).json({ message: "Review added successfully" });
};

//route : /api/post/editPost
const editPost = async (req, res) => {
  const { title, area, workRequirement, timings, postId } = req.body;
  if (!postId) {
    return res.status(400).json({ message: "Please provide the postId" });
  }
  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  if (title) {
    post.title = title;
  }
  if (area) {
    post.area = area;
  }
  if (workRequirement) {
    post.workRequirement = workRequirement;
  }
  if (timings) {
    post.timings = timings;
  }

  await post.save();

  res.status(200).json({ message: "Post updated successfully" });
};

//route : /api/post/deletePost
const deletePost = async (req, res) => {
  const { postId } = req.body;
  if (!postId) {
    return res.status(400).json({ message: "Please provide the postId" });
  }
  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  await post.remove();
  res.status(200).json({ message: "Post deleted successfully" });
};

const showInterest = async (req, res) => {
  if (req.user.role !== "volunteer") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const { postId } = req.body;
  if (!postId) {
    return res.status(400).json({ message: "Please provide the postId" });
  }
  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  post.interested.push(req.user._id);
  await post.save();
  const user = await User.findById(req.user._id);
  user.yourInterest.push(postId);
  await user.save();
  res.status(200).json({ message: "Interest shown successfully" });
};

module.exports = {
  getAllPosts,
  addPost,
  addReview,
  editPost,
  getPostDetails,
  deletePost,
  getAllPostsNGO,
  showInterest,
};
