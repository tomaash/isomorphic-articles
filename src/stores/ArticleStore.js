import alt from '../alt';
import ArticleActions from '../actions/ArticleActions';

class ArticleStore {
  constructor() {
    this.bindActions(ArticleActions);
    this.articles = [];
  }
  onFetch(data) {
    console.log(data);
    this.articles = data;
  }
  onPost(data) {
    this.articles.unshift(data);
  }
}

module.exports = (alt.createStore(ArticleStore));

