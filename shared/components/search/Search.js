import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import SearchIcon from 'shared/icons/icon-search.svg';
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
            <Container active={ active }>
                <IconWrap>
                    <SearchIcon />
                </IconWrap>
                <Input active={ active } placeholder="Search..." onBlur={ (e) => this.handleActive(e) } onFocus={ (e) => this.handleActive(e) } />
            </Container>
        );
    };
}

const Container = styled.div`
    background: ${ colors.lightblue };
    border-radius: 3px;
    position: relative;
    width: 50px;
    transition: all .2s ease-in-out;

    ${ props => props.active && css`
        padding: 0 50px 0 0;
        width: 200px;
        max-width: 100%;
    `}
`;

const Input = styled.input`
    appearance: none;
    background: none;
    border: 0;
    color: ${ colors.font.black };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          };
    font-size: 14px;
    line-height: 40px;
    padding: 0 50px 0 20px;
    height: 40px;
    width: 100%;

    position: relative;
    z-index: 10;

    &:active, &:focus {
        outline: 0;
    }

    &::placeholder {
        color: ${ colors.font.darkgrey };
    }
`;

const IconWrap = styled.div`
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    right: 17px;
    z-index: 9;

    svg {
        path{
            fill: ${ colors.blue };
        }  
    }
`;

export default Search;
