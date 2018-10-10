import React from 'react';
import styled, { css } from 'styled-components';

import ProductCard from 'shared/components/card-product/Card';

import colors from 'shared/styles/colors';

const ProductBlock = () => {
    return (
        <Container>
            <ProductCard title="iPhone 6 Black" price="AED 2000" />
            <ProductCard title="iPhone 6 Black" price="AED 2000" />
            <ProductCard title="iPhone 6 Black" price="AED 2000" />
        </Container>
    );
};

export default ProductBlock;

const Container = styled.header`
    border-top: 1px solid ${ colors.lightgrey };
    display: flex;
    justify-content: space-between;
    margin: 70px 0;
    padding: 70px 0 0 0;
`;
