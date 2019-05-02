import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const StyledInput = styled.input`

`;

export const StyledButton = styled.button`
    background-color: teal;
`;


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
                <StyledForm onSubmit={this.submit}>
                    <StyledInput 
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.onChange}
                        type='text'
                        name='username'>
                    </StyledInput>
                    <input 
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.onChange}
                        type='password'
                        name='password'>
                    </input>
                    <StyledButton>Login</StyledButton>
                </StyledForm>
            </div>
        )
    }
}

export default Login