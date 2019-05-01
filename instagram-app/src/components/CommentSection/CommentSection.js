import React from 'react';
import './CommentSection.scss'

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.comments,
            input: ''
        }
        console.log(this.state.comments)
    }

    onUpdate = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value)
      };

    // addComment = (event) => {
    //     event.preventDefault()
    //     this.props.addComment(this.props, this.state.input)
    //     this.setState({ input: '' })
    // }

    test = (event) => {
        event.preventDefault()
        let username1 = localStorage.getItem('user')
        console.log(username1)
        this.setState({
            comments: [...this.state.comments, {username: username1, text: this.state.input, id: Date.now()}]
        })
        console.log('HERE', this.state.comments)
        this.setState({ input: ''})

    }

    render() {
        return (
            <>
                <div className='commentContainer'>
                    {this.state.comments.map(comment => (
                        <div key={comment.id} className='singleCommentContainer'>
                            <div className='commentUserName'>
                                <strong>{comment.username}</strong> {comment.text}
                            </div>
                        </div>
                    ))}
                    <form onSubmit={this.test} className='newComment'>
                        <input 
                            name='input' 
                            onChange={this.onUpdate} 
                            value={this.state.input} 
                            placeholder='Add a comment...'>
                        </input>
                    </form>
                </div>
            </>
        )
    }
}

export default CommentSection;