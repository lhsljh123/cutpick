import styled from 'styled-components';

import { TextWithButton } from './Text';

function Button({ text, onClick, width = '300px', height = '60px'}) {
    return (
      <ButtonComponent>
        <ButtonText onClick={onClick} width={width} height={height}>{text}</ButtonText>
      </ButtonComponent>
    );
  }
  
export default Button;

const ButtonComponent = styled.div`
  text-align: center;
`

const ButtonText = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  box-sizing: ${props => props.width === "208px" ? "border-box" : ""};
  border-radius: ${props => props.width === "208px" ? "10px" : "6px"};
  padding: ${props => props.width === "208px" ? "0px" : ""};
  vertical-align: text-top;
  background-color: #826858;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  color: #FFFFFF;
`
