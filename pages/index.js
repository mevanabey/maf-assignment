import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Page from 'shared/components/page/Page';
import Button from 'shared/components/button/Button';
import ProductCard from 'shared/components/card-product/Card';
import TextInput from 'shared/components/input-text/Text';
import Search from 'shared/components/search/Search';
import Checkbox from 'shared/components/input-checkbox/Checkbox';

import colors from 'shared/styles/colors';

//TODO: Breakdown into smaller components
class AppContainer extends Component {
    render() {
        return (
            <Page>
                <InnerWrapper>
                    <Header>
                        <LogoWrap>
                            <img src="/static/logo.png" alt="logo" title="Logo" />
                        </LogoWrap>
                        <SearchWrap>
                            <Search />
                        </SearchWrap>
                    </Header>

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

                    <ProductWrapper>
                        <ProductCard title="iPhone 6 Black" price="AED 2000" />
                        <ProductCard title="iPhone 6 Black" price="AED 2000" />
                        <ProductCard title="iPhone 6 Black" price="AED 2000" />
                    </ProductWrapper>
                    
                </InnerWrapper>
            </Page>
        );
    }
}

export default AppContainer;

const InnerWrapper = styled.div`
    margin: 0 0 50px 0;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 30px 0 60px 0;
`;

const LogoWrap = styled.div`

`;

const SearchWrap = styled.div`

`;

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

const ProductWrapper = styled.section`
    border-top: 1px solid ${ colors.lightgrey };
    display: flex;
    justify-content: space-between;
    margin: 70px 0;
    padding: 70px 0 0 0;
`;