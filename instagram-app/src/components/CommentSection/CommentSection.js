import React from 'react';
import styled from 'styled-components'
import './CommentSection.scss'

const StyledCommentContainer = styled.div`
    width: 100%;
`;

const StyledSingleCommentContainer = styled.div`
    width: 95%;
    margin: 10px;
`;

const StyledForm = styled.form`
    width: calc(100% - 20px);
    margin: 10px;
`;

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
`;

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
                <StyledCommentContainer className='commentContainer'>
                    {this.state.comments.map(comment => (
                        <StyledSingleCommentContainer key={comment.id} className='singleCommentContainer'>
                            <div>
                                <strong>{comment.username}</strong> {comment.text}
                            </div>
                        </StyledSingleCommentContainer>
                    ))}
                    <StyledForm onSubmit={this.test} className='newComment'>
                        <StyledInput 
                            name='input' 
                            onChange={this.onUpdate} 
                            value={this.state.input} 
                            placeholder='Add a comment...'>
                        </StyledInput>
                    </StyledForm>
                </StyledCommentContainer>
            </>
        )
    }
}

export default CommentSection;