import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import colors from 'shared/styles/colors';

class TextInput extends Component {
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
        const { error, placeholder } = this.props;

        return (
            <Container>
                <Label active={ active }>{ placeholder }</Label>
                { error && (
                    <Error>{ error }</Error>
                )}
                <Input { ...this.props } onBlur={ (e) => this.handleActive(e) } onFocus={ (e) => this.handleActive(e) } />
            </Container>
        );
    };
}

const Container = styled.div`
    margin: 25px 0 0 0;
    position: relative;
`;

const Error = styled.div`
    background: ${ colors.lightred }; 
    color: ${ colors.font.red }; 
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    height: 20px;
    padding: 0 15px;
    transition: all .1s ease-in-out;

    position: absolute;
    top: -20px;
    right: 3px;
`;

const Label = styled.div`
    color: ${ colors.font.darkgrey }; 
    font-size: 13px;
    font-weight: 600;
    font-style: italic;
    transition: all .1s ease-in-out;

    position: absolute;
    top: 0;
    left: 0;

    ${ props => props.active && css`
        top: -20px;
    `}
`;

const Input = styled.input`
    appearance: none;
    border: 1px solid #f6f6f6;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0px rgb(245, 245, 245) inset;
    color: ${ colors.font.darkgrey };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          };
    font-size: 14px;
    font-weight: 600;
    padding: 10px 20px;
    height: 45px;
    width: 100%;

    position: relative;

    &:active, &:focus {
        outline: 0;
        border: 1px solid ${ colors.blue };
        box-shadow: 0px 0px 7.52px 0.6px rgba(173, 215, 255, 0.75); 
    }

    &::placeholder {
        color: ${ colors.font.lightgrey };
    }
    
    ${ props => props.error && css`
        border: 1px solid red;
        box-shadow: none;
    `}
`;

export default TextInput;
