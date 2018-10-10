import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Page from 'shared/components/page/Page';
import Header from 'shared/components/page/header/Header';
import Login from 'shared/components/form-login/Login';
import ProductBlock from 'shared/components/product-block/ProductBlock';

class AppContainer extends Component {
    render() {
        return (
            <Page>
                <InnerWrapper>
                    <Header />
                    <Login />
                    <ProductBlock />  
                </InnerWrapper>
            </Page>
        );
    }
}

export default AppContainer;

const InnerWrapper = styled.div`
    margin: 0 0 50px 0;
`;