import alt from '../alt';
import axios from 'axios';

class ArticleActions {
  async fetch() {
    const response = await axios.get('/api/articles?sort=-createdAt');
    this.dispatch(response.data);
  }
  async post(data) {
    const response = await axios.post('/api/articles', data);
    this.dispatch(response.data);
  }
}

module.exports = alt.createActions(ArticleActions);
