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
`;

const LogoWrap = styled.div`

`;

const SearchWrap = styled.div`

`;
