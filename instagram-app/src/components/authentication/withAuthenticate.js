import React from 'react'
import PostsPage from '../PostContainer/PostsPage'
import Login from '../login/login'

const withAuthenticate = PostsPage => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                loggedin: false
            };
        }
        componentDidMount() {
            if (!localStorage.getItem('user')) {
              this.setState({ loggedin: false });
            } else {
              this.setState({ loggedin: true });
            }
          }
        render() {
            console.log('logged in?', this.state.loggedin)
            if (this.state.loggedin) return <PostsPage />;
            return <Login />;
        }
    }

}

export default withAuthenticate