import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  mainImage: { id: String, src: String }
});

const Blog = mongoose.model('Recipe', recipeSchema);

export default Blog;
