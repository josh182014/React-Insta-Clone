import React from 'react';
import './App.scss';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate'
import Login from './components/login/login'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: []
      // newData: [{}]
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      filteredData: []
    })
  }

  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

export default App;
