import React from 'react'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
          };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

    submit = (event) => {
        event.preventDefault()
        localStorage.setItem('user', this.state.username);
        window.location.reload();
    }

    logout = (event) => {
        event.preventDefault()
        localStorage.clear()
        window.location.reload()
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submit}>
                    <input 
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.onChange}
                        type='text'
                        name='username'>
                    </input>
                    <input 
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.onChange}
                        type='password'
                        name='password'>
                    </input>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login