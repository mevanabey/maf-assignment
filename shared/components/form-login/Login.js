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

        }
    }

    render() {
        return (
            <LoginForm>
                <Title>
                    Sign In Now
                    <span>Unlock awesome features!</span>
                </Title>
                <TextInput type="text" placeholder="Username" error="Required field" />
                <TextInput type="password" placeholder="Password" />
                <DoubleWrap>
                    <Checkbox label="Keep me logged in" />
                    <ForgotPassword>
                        Forgot password?
                    </ForgotPassword>
                </DoubleWrap>
                <Button primary>Sign In</Button>
            </LoginForm>
        );
    }
}

export default Login;

const LoginForm = styled.div`
    border: 3px solid ${ colors.lightgrey };
    border-radius: 3px;
    width: 400px;
    margin: 0 auto;
    max-width: 100%;
    padding: 25px 50px 50px 50px;
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
