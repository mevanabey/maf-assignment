import React, { Component } from 'react';
import styled from 'styled-components';

import Head from 'shared/components/head/Head';

export default class extends Component {
    render() {
        const { children } = this.props;

        return (
            <Container>
                <Head />
                <Main>
                    { children }
                </Main>
            </Container>
        );
    }
}

const Container = styled.div`
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    
`;

const Main = styled.main`
    flex-grow: 1;
    margin: 0 auto;
    min-height: 100vh;
    width: 100%;
    max-width: 800px;
`;
