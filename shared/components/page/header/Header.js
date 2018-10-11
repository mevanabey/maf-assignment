import React from 'react';
import styled, { css } from 'styled-components';

import Search from 'shared/components/search/Search';

const Header = () => {
    return (
        <Container>
                <LogoWrap>
                    <img src="/static/logo.png" alt="logo" title="Logo" />
                </LogoWrap>
                <SearchWrap>
                    <Search />
                </SearchWrap>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 30px 0 60px 0;

    @media screen and (max-width: 768px) {
        padding: 30px 12px 60px 12px;
    }
`;

const LogoWrap = styled.div`
    @media screen and (max-width: 768px) {
        img {
            width: 150px;
        }
    }
`;

const SearchWrap = styled.div`

`;
