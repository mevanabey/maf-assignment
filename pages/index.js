import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Page from 'shared/components/page/Page';
import Button from 'shared/components/button/Button';
import ProductCard from 'shared/components/card-product/Card';
import TextInput from 'shared/components/input-text/Text';
import Search from 'shared/components/search/Search';
import Checkbox from 'shared/components/input-checkbox/Checkbox';

class AppContainer extends Component {
    render() {
        return (
            <Page>
                <InnerWrapper>
                    <Button primary>Sign In</Button>
                    <ProductCard title="iPhone 6 Black" price="AED 2000" />
                    <TextInput type="text" placeholder="Username" error="Required field" />
                    <TextInput type="password" placeholder="Password" />
                    <Checkbox label="Keep me logged in" />
                    <Search />
                </InnerWrapper>
            </Page>
        );
    }
}

export default AppContainer;

const InnerWrapper = styled.div`

`