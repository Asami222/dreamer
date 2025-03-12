import styled, { css } from 'styled-components'

/**
 * テキストインプット
 */

export type InputProps = {
  $hasError?: boolean
  $hasBorder?: boolean
  $small?: boolean
  height: string
}

const Input = styled.input.attrs<InputProps>(() => ({
  style: {
    
  }
}))<InputProps>`
  color: #6B3734;
  ${({ $hasBorder, $hasError, theme }) => {
    if ($hasBorder) {
      return css`
        border: 3px dashed
          ${$hasError ? theme.colors.borderDash : theme.colors.borderDash};
        border-radius: 20px;
      `
    } else {
      return css`
        border: 1px solid
        ${$hasError ? theme.colors.danger : 'transparent' };
        border-radius: 5px;
      `
    }
  }}
  display: inline-block;
  padding: 16px 14px;
  background-color: ${({theme}) => theme.colors.secondary};
  box-sizing: border-box;
  outline: none;
  ${({ $small }) => {
    if($small) {
      return css`
      width: 72px;
      text-align: center;
      `
    } else {
      return css`
      width: 100%;
      text-align: left;
      `
    }
  }}
  font-size: ${({theme}) => theme.fontSizes.smallMedium};
  line-height: 20px;
  height: ${({height}) => height};
  &::placeholder {
    color: ${({theme}) => theme.colors.placeholder};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
/*
Input.defaultProps = {
  $hasBorder: true,
}
*/

export default Input