import * as React from 'react'
import styled from 'styled-components'

interface SeparatorProps {
  children?: React.ReactNode
}

const getMargin = ({ children }: SeparatorProps) => (children ? '.50em' : '0em')

/**
 * セパレーター
 */
const Separator = styled.div<SeparatorProps>`
  height: 1px;
  color: ${({theme}) => theme.colors.text};
  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    flex: 1;
    opacity: 0.35;
    border-top: 1px solid ${({theme}) => theme.colors.text};
  }

  &::before {
    margin-right: ${getMargin};
  }

  &::after {
    margin-left: ${getMargin};
  }
`

export default Separator