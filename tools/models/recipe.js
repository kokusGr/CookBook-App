import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Blog = mongoose.model('Recipe', RecipeSchema);

export default Blog;
