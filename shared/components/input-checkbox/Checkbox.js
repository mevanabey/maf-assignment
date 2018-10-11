import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import CheckIcon from 'shared/icons/icon-check.svg';
import colors from 'shared/styles/colors';


class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }
    }
  
    handleChange(e) {
        this.setState(state => {
            return { checked: !state.checked }
        });
    }
  
    render() {
        const { disabled, label } = this.props;
        const { checked } = this.state;

        return (
            <Container>
                <CheckboxLabel>
                    <CheckboxInput 
                        type="checkbox"
                        checked={ checked }
                        disabled={ disabled }
                        onChange={ (e) => this.handleChange(e) }
                    />
                    <CheckboxSpan checked={ checked }>
                        <CheckIcon />
                    </CheckboxSpan>
                    <LabelText>{ label }</LabelText>
                </CheckboxLabel>
            </Container>
        );
    }
}

export default Checkbox;

const Container = styled.div`
    display: flex;
`;

const CheckboxLabel = styled.label`
    color: ${ colors.font.darkgrey };
    display: flex;
    font-size: 12px;
    user-select: none;
`;

const LabelText = styled.span`
    align-items: center;
    display: flex;
    line-height: 20px;
`;

const CheckboxInput = styled.input`
    display: none;
`;

const CheckboxSpan = styled.span`
    color: red;
    display: flex;
    width: 20px;
    height: 20px;
    background: ${ colors.white };
    align-items: center;
    justify-content: center;
    color: white;
    margin: 5px 10px 5px 5px;
    border: 1px solid ${ colors.blue };
    border-radius: 3px;
    box-sizing: border-box;
    transition: all 0.2s;

    svg {
        display: none;

        path {
            fill: ${ colors.white };
        }
    }

    ${ props => props.checked && css`
        background: ${ colors.blue };

        svg {
            display: block;
        }
    `}
`;