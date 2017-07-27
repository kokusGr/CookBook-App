import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  mainImage: { id: String, src: String }
});

const Blog = mongoose.model('Recipe', RecipeSchema);

export default Blog;
