
import { styled } from 'styled-components'
import Box, { BoxProps } from '../Box'
import type {
  Prop,
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyFlexWrap,
  CSSPropertyAlignSelf,
} from 'types/styles'
import { toPropValue, Space } from 'utils/styles'

type FlexProps = BoxProps & {
  $alignItems?: Prop<CSSPropertyAlignItems>
  $alignContent?: Prop<CSSPropertyAlignContent>
  $justifyContent?: Prop<CSSPropertyJustifyContent>
  $justifyItems?: Prop<CSSPropertyJustifyItems>
  $flexWrap?: Prop<CSSPropertyFlexWrap>
  $flexBasis?: Prop<string>
  $flexDirection?: Prop<CSSPropertyFlexDirection>
  $flexGrow?: Prop<string>
  $flexShrink?: Prop<string>
  $justifySelf?: Prop<CSSPropertyJustifySelf>
  $alignSelf?: Prop<CSSPropertyAlignSelf>
  $order?: Prop<string>
  $gap?: Prop<Space>
}

/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 */
const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${(props) => toPropValue('align-items', props.$alignItems, props.theme)}
  ${(props) => toPropValue('align-content', props.$alignContent, props.theme)}
  ${(props) => toPropValue('justify-content', props.$justifyContent, props.theme)}
  ${(props) => toPropValue('justify-items', props.$justifyItems, props.theme)}
  ${(props) => toPropValue('flex-wrap', props.$flexWrap, props.theme)}
  ${(props) => toPropValue('flex-basis', props.$flexBasis, props.theme)}
  ${(props) => toPropValue('flex-direction', props.$flexDirection, props.theme)}
  ${(props) => toPropValue('flex-grow', props.$flexGrow, props.theme)}
  ${(props) => toPropValue('flex-shrink', props.$flexShrink, props.theme)}
  ${(props) => toPropValue('justify-self', props.$justifySelf, props.theme)}
  ${(props) => toPropValue('align-self', props.$alignSelf, props.theme)}
  ${(props) => toPropValue('order', props.$order, props.theme)}
  ${(props) => toPropValue('gap', props.$gap, props.theme)}
`

export default Flex