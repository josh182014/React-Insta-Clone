import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    padding: 10px;
    background-color: #eaedf2
    width: 50%;
    align-self: center;
    margin: 0 auto;
    align-items: center;
    align-content: center;
    padding-bottom: 40px;
`;

const StyledH1 = styled.h1`
    text-align: center;
`;

const StyledH4 = styled.h4`
    text-align: center;
`;

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-self: center;
`;

const StyledInput = styled.input`
    width: 100%;
    margin-bottom: 10px;
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
            <StyledDiv> <StyledH4>Welcome To React<br></br>Insta Clone</StyledH4>
                <StyledH1>Login</StyledH1>
                <StyledForm onSubmit={this.submit}>
                    <StyledInput 
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.onChange}
                        type='text'
                        name='username'>
                    </StyledInput>
                    <StyledInput 
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.onChange}
                        type='password'
                        name='password'>
                    </StyledInput>
                    <StyledButton>Login</StyledButton>
                </StyledForm>
            </StyledDiv>
        )
    }
}

export default Login