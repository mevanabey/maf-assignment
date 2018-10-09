import React from 'react';
import styled, { css } from 'styled-components';

import colors from 'shared/styles/colors';

const ProductCard = ({ title, price, img, ...props }) => {
    return (
        <Container { ...props }>
            <ImageWrapper>
                { !img && (
                    <img src="/static/product-default.jpg" alt={ title } title />
                ) }
            </ImageWrapper>
            <Title>{ title }</Title>
            <Price>{ price }</Price>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;

const ImageWrapper = styled.div`
    border: 3px solid ${ colors.lightgrey };
    border-radius: 3px;
    width: 212px;
    height: 212px;
    text-align: center;

    position: relative;

    img {
        display: block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 auto;
    }
`;

const Title = styled.span`
    color: ${ colors.font.darkgrey };
    display: block;
    font-size: 14px;
    margin: 20px 0 0 0;
`;

const Price = styled.span`
    color: ${ colors.font.black };
    display: block;
    font-size: 18px;
    font-weight: 600;
`;

export default ProductCard;
