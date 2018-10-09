import React from 'react';
import styled, { css } from 'styled-components';

import colors from 'shared/styles/colors';

const Button = ({ children, ...props }) => {
    return (
        <Container { ...props }>
            {children}
        </Container>
    );
};

const Container = styled.button`
    align-self: center;
    appearance: none;
    background: transparent;
    border: 0;
    color: ${ colors.white };
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: .03em;
    margin: 0 5px;
    width: 100%;
    outline: 0;
    border-radius: 3px;
    text-align: center;
    text-transform: uppercase;
    transition: background 0.3s ease, border 0.3s ease;
    padding: 15px;

    position: relative;
    
    ${ props => props.primary && css`
        background: ${ colors.blue };
    `}
`;

export default Button;
