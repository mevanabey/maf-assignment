import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import colors from 'shared/styles/colors';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        }
    }
    
    handleActive(e){
        if(!e.target.value) {
            this.setState(state => {
                return { active: !state.active }
            })
        }
    }

    render(){
        const { active } = this.state;

        return (
            //TODO: Add Icon
            <Container>
                <Input active={ active } placeholder="Search..." onBlur={ (e) => this.handleActive(e) } onFocus={ (e) => this.handleActive(e) } />
            </Container>
        );
    };
}

const Container = styled.div`
`;

const Input = styled.input`
    appearance: none;
    background: ${ colors.lightblue };
    border: 1px solid #f6f6f6;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0px rgb(245, 245, 245) inset;
    color: ${ colors.font.black };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          };
    font-size: 14px;
    line-height: 40px;
    padding: 0 50px 0 0;
    height: 40px;
    width: 0;
    transition: all .2s ease-in-out;

    position: relative;

    &:active, &:focus {
        outline: 0;
    }

    &::placeholder {
        color: ${ colors.font.darkgrey };
    }
    
    ${ props => props.active && css`
        padding: 0 50px 0 20px;
        width: 200px;
        max-width: 100%;
    `}
`;

export default Search;
