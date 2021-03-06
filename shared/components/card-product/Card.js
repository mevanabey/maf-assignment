import React from 'react';
import styled, { css } from 'styled-components';

import colors from 'shared/styles/colors';

const ProductCard = ({ title, price, img, ...props }) => {
    return (
        <Container { ...props }>
            <ImageWrapper>
                { !img && (
                    <img src="/static/product-default.jpg" alt={ title } title={ title } />
                ) }
            </ImageWrapper>
            <Title>{ title }</Title>
            <Price>{ price }</Price>
        </Container>
    );
};

const Container = styled.div`
    position: relative;

    @media screen and (max-width: 560px) {
        margin: 0 0 30px 0;
    }
`;

const ImageWrapper = styled.div`
    border: 3px solid ${ colors.lightgrey };
    border-radius: 3px;
    cursor: pointer;
    width: 212px;
    height: 212px;
    text-align: center;
    overflow: hidden;

    position: relative;

    img {
        display: block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 auto;
        transition: all .1s ease-in-out;
    }

    &:hover {
        img {
            transform: translateY(-50%) scale(1.08);
        }
    }

    @media screen and (max-width: 560px) {
        margin: 0 auto 0 auto;
    }
`;

const Title = styled.span`
    color: ${ colors.font.darkgrey };
    display: block;
    font-size: 14px;
    margin: 20px 0 0 0;

    @media screen and (max-width: 560px) {
        margin: 10px 0 0 0;
        text-align: center;
    }
`;

const Price = styled.span`
    color: ${ colors.font.black };
    display: block;
    font-size: 18px;
    font-weight: 600;

    @media screen and (max-width: 560px) {
        text-align: center;
    }
`;

export default ProductCard;
