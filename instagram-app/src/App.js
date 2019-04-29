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
      data: dummyData
    };
  }

  render() {
    return (
      <div className="container">
        <SearchBar data={this.state.data} />
        <PostContainer data={this.state.data} />
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
