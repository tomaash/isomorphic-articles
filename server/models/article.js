import mongoose from 'mongoose';
const ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

export default mongoose.model('article', ArticleSchema);

