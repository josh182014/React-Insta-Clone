import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.comments.likes,
            id: props.comments.id
        }
        console.log(this.state.likes)
        console.log('id', this.state.id)
    }

    addLike = () => {
        if (sessionStorage.getItem(`liked${this.state.id}`) === this.state.id) {
            console.log('test')
            let likes = this.state.likes - 1
            this.setState({ likes })
            sessionStorage.removeItem(`liked${this.state.id}`);
        }
        else {
            sessionStorage.setItem(`liked${this.state.id}`, this.state.id)
            let likes = this.state.likes + 1
            this.setState({ likes })
        }

    }
    render() {
        return (
            <div>
            <div className='icons'>
                <i onClick={this.addLike} className="postIcon far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <div onClick={this.addLike} className={'likes'}>
                <strong>{this.state.likes} likes</strong>
            </div>
            </div>
        )
    }
}

export default Likes;