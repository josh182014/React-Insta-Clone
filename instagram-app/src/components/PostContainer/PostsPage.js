import React from 'react';
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data.js';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            filteredData: []
        }
    }
    componentDidMount() {
        this.setState({
          data: dummyData,
          filteredData: []

        })
      }

    addLike = (event) => {
    console.log('liked!!', event)
  }

  filterPosts = (event) => {
    console.log('event', event.target.value)
    console.log('filtered!')
    console.log(this.state.data)
    let newFilteredData = this.state.data.filter(each => {
      if (each.username.includes(event.target.value)) {
        console.log('match!')
        return each;
      }
    })
    this.setState({ data: newFilteredData });
    if(event.target.value.length < 1) {
      this.setState({ data: dummyData})
    }
    console.log('newFilteredData', newFilteredData)
  }

  render() {
    return (
      <div className='container'>
        <SearchBar data={this.state.data} filterPosts={this.filterPosts} />
        <PostContainer addLike={this.addLike} addComment={this.addComment} data={this.state.data} />
      </div>
    );
  }
}

export default PostsPage;