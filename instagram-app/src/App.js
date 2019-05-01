import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      newData: [{}]
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      // newData: [{
      //   username: 'billybob',
      //   comment: '',
      //   id: ''
      // }]
    })
  }

  // componentDidUpdate() {
  //   console.log('test')
  // }

  addComment = (event, input) => {
    console.log('comment added!', event, 'input', input)
    event.comments.map(comment => {
      console.log('comment', comment)
      this.setState({
        data: [...this.state.data, {username: 'jesus', text: this.state.input, id: Date.now()}]
    })
    })
  }

  addLike = (event) => {
    console.log('liked!!', event)
  }

  render() {
    return (
      <div className="container">
        <SearchBar data={this.state.data} />
        <PostContainer addLike={this.addLike} addComment={this.addComment} data={this.state.data} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired
};

App.defaultProps = {
  data: []
};

export default App;
