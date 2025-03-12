import styled from 'styled-components'

const Button3 = styled.button.attrs(() => ({
  
  style: {

  }
}))`
  display: inline-block; 
  width: 100%;
  height: 56px;
  line-height: 56px;
  cursor: pointer;
  outline: 0;
  border: none;
  color: #EEFEFF;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 1px rgba(76, 27, 61, 0.4);
  border-radius: 50px;
  box-sizing: border-box;
  transition: all 0.1s;
  background: ${({theme}) => (theme.colors.btn1Gra2)};
  box-shadow: 0 2px 4px 0 rgba(177, 88, 82, 0.25);
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  &:hover {
    background: ${({theme}) => (theme.colors.btn1Gra2Hover)};
    text-shadow: none;
    transition: all 0.3s;
  }
`

export default Button3