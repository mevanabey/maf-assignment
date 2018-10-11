import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Button from 'shared/components/button/Button';
import TextInput from 'shared/components/input-text/Text';
import Checkbox from 'shared/components/input-checkbox/Checkbox';

import colors from 'shared/styles/colors';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false,
            error: {
                username: '',
                password: ''
            },
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(input, value) {
        this.setState({
            [input]: value
        });

        this.validateForm();
    }

    submitForm(e) {
        e.preventDefault();

        if(this.validateForm()){
            //Submit details to API
        }
    }

    validateForm(){
        if(this.state.username && this.state.password){
            this.setState( state => { 
                return { error: { username: '', password: '' } }
            });

            return true;
        } else {
            if(this.state.username){
                this.setState( state => { 
                    return { error: { username: '', password: state.error.password } }
                });
            }

            if(!this.state.username){
                this.setState( state => { 
                    return { error: { username: 'Required Field', password: state.error.password } }
                });
            }

            if(!this.state.password){
                this.setState( state => { 
                    return { error: { password: 'Required Field', username: state.error.username } }
                });
            }

            if(this.state.password){
                this.setState( state => { 
                    return { error: { password: '', username: state.error.username } }
                });
            }

            return false;
        }
    }

    render() {
        return (
            <LoginForm>
                <Title>
                    Sign In Now
                    <span>Unlock awesome features!</span>
                </Title>

                <TextInput type="text" placeholder="Username" name="username" error={ this.state.error.username } handle={ this.handleInput } />
                <TextInput type="password" placeholder="Password" name="password" error={ this.state.error.password } handle={ this.handleInput } />

                <DoubleWrap>
                    <Checkbox label="Keep me logged in" />
                    <ForgotPassword>
                        Forgot password?
                    </ForgotPassword>
                </DoubleWrap>

                <Button primary onClick={ (e) => this.submitForm(e) }>Sign In</Button>
            </LoginForm>
        );
    }
}

export default Login;

const LoginForm = styled.form`
    border: 3px solid ${ colors.lightgrey };
    border-radius: 3px;
    width: 400px;
    margin: 0 auto;
    max-width: 95%;
    padding: 25px 50px 50px 50px;

    @media screen and (max-width: 560px) {
        padding: 25px 20px 50px 20px; 
    }
`;

const DoubleWrap = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0;
`;

const ForgotPassword = styled.a`
    color: ${ colors.font.blue };
    font-size: 12px;
`;

const Title = styled.h2`
    font-size: 24px;
    text-align: center;
    margin: 0 0 40px 0;
    width: 100%;

    span {
        display: block;
        font-size: 14px;
        font-weight: normal;
    }
`;
