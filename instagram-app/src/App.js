import React from 'react';
import './App.scss';
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

export default App;
