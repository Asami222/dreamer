import styled, { css } from 'styled-components'

export type Selectcolor = 'Red' | 'Pink'

export type ButtonProps = {
  $hasError?: boolean
  $hasBorder?: boolean
  $selectcolor?: Selectcolor
}

const Button2 = styled.button.attrs<ButtonProps>(() => ({
  
  style: {

  }
}))<ButtonProps>`
  position: relative;
  z-index: 0;
  top: 2px;
  left: 0px;
  display: inline-block; 
  width: 223px;
  height: 62px;
  line-height: 62px;
  background: transparent;
  cursor: pointer;
  outline: none;
  text-decoration: 'none';
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.25em;
  border-radius: 50px;
  box-sizing: border-box;
  transition: all 0.1s;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0px;
    display: block;
    width: 223px;
    height: 62px;
    z-index: -1;
    background: ${({ $selectcolor, theme }) => ($selectcolor === 'Red' ? theme.colors.btn2Gra1 : theme.colors.btn2Gra2)};
    border-radius: 50px;
    transition: all 0.1s;
    ${({ $hasError, theme }) => {
      if ($hasError) {
        return css`
          border: 1px solid ${theme.colors.danger};
        `
      } else {
        return css`
          border: none;
        `
      }
    }}
  }
  &::after {
    ${({ $hasError }) => {
      if ($hasError) {
        return css`
          display: none;
        `
      } else {
        return css`
          display: block;
        `
      }
    }}
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 223px;
    height: 62px;
    z-index: -2;
    background: ${({theme}) => theme.colors.btn2GraBack};
    border-radius: 0px;
    border-radius: 50px;
  }
  &:hover {
    ${({ disabled, $hasError}) => {
      if (disabled || $hasError) {
        return css`
          top: 2px;
          left: 0px;
        `
      } else {
        return css`
          top: 2px;
          left: 0px;
        `
      }
    }}
    transition: all 0.3s;
  }
  &:hover:before {
    ${({ disabled, $hasError}) => {
      if (disabled || $hasError) {
        return css`
          top: 2px;
          left: 0px;
        `
      } else {
        return css`
          top: 2px;
          left: 0px;
        `
      }
    }}
    background: ${({ $selectcolor, theme }) => ($selectcolor === 'Red' ? theme.colors.btn1GraHover : theme.colors.btn2GraHover)};
    transition: all 0.3s;
  }
`

export default Button2