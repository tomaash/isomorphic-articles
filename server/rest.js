import generateApi from 'koa-mongo-rest';
import Article from './models/article';

export default function(app) {
  const mongoUrl = process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || '127.0.0.1:27017/isofilmdb';
  const mongoose = require('mongoose');
  mongoose.connect(mongoUrl);

  generateApi(app, Article, '/api');
}

