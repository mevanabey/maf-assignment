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
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Main = styled.main`
    flex-grow: 1;
    width: 100%;
    max-width: 1300px;
    padding: 50px 5px 30px 5px;

    p {
        text-align: justify;
        margin: 0 0 25px 0;
    }
`;
