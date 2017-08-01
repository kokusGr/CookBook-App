import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  mainImage: { id: String, src: String },
  images: [{ id: String, src: String }],
  ingridients: [{ id: String, text: String }],
  directions: [{ id: String, text: String }],
  kcal: String,
  servings: String
});

const Blog = mongoose.model('Recipe', recipeSchema);

export default Blog;
