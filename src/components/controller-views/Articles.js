import React from 'react';
import {Well, Input, Button} from 'react-bootstrap';
import connectToStores from 'alt/utils/connectToStores';
import ArticleActions from '../../actions/ArticleActions';
import ArticleStore from '../../stores/ArticleStore';

@connectToStores
export default class App extends React.Component {
  static propTypes = {
    articles: React.PropTypes.array
  }
  static getStores() {
    return [ArticleStore];
  }
  static getPropsFromStores() {
    return ArticleStore.getState();
  }
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
    ArticleActions.fetch();
  }
  _changeHandler(key, attr, event) {
    var state = {};
    state[key] = this.state[key] || {};
    state[key][attr] = event.currentTarget.value;
    this.setState(state);
  };
  _submit() {
    ArticleActions.post(this.state.article);
    this.state.article = {};
  }
  render() {
    return (
      <div>
        <h1>Publish article</h1>
        <Input
          type="text"
          label="Title"
          placeholder="Enter title..."
          value={this.state.article.title}
          onChange={this._changeHandler.bind(this, 'article', 'title')}/>
        <Input
          type="textarea"
          label="Content"
          placeholder="Write content..."
          value={this.state.article.content}
          onChange={this._changeHandler.bind(this, 'article', 'content')}/>
        <Button
          bsStyle="primary"
          onClick={this._submit.bind(this)}>Submit</Button>
        <h1>Newest articles</h1>
        {this.props.articles && this.props.articles.map((item, index) =>
          <Well key={index}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </Well>
        )}
      </div>
    );
  }
}

