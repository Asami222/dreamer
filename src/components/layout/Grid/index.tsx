import { styled } from 'styled-components'
import Box, { BoxProps } from '../Box'
import type { CSSPropertyGridArea, CSSPropertyGridAutoFlow, CSSPropertyGridColumn, CSSPropertyGridRow, Prop } from 'types/styles'
import { toPropValue } from 'utils/styles'

type GridProps = BoxProps & {
  $gridGap?: Prop<string>
  $gridColumnGap?: Prop<string>
  $gridRowGap?: Prop<string>
  $gridColumn?: Prop<CSSPropertyGridColumn>
  $gridRow?: Prop<CSSPropertyGridRow>
  $gridAutoFlow?: Prop<CSSPropertyGridAutoFlow>
  $gridAutoColumns?: Prop<string>
  $gridAutoRows?: Prop<string>
  $gridTemplateColumns?: Prop<string>
  $gridTemplateRows?: Prop<string>
  $gridTemplateAreas?: Prop<CSSPropertyGridArea>
  $gridArea?: Prop<string>
  $placeItems?: Prop<string>
}

/**
 * Gridコンポーネント
 * gridレイアウトの実現に利用する
 */
const Grid = styled(Box)<GridProps>`
  display: 'grid';
  ${(props) => toPropValue('grid-gap', props.$gridGap, props.theme)}
  ${(props) => toPropValue('grid-column-gap', props.$gridColumnGap, props.theme)}
  ${(props) => toPropValue('grid-row-gap', props.$gridRowGap, props.theme)}
  ${(props) => toPropValue('grid-row', props.$gridRow, props.theme)}
  ${(props) => toPropValue('grid-column', props.$gridColumn, props.theme)}
  ${(props) => toPropValue('grid-auto-flow', props.$gridAutoFlow, props.theme)}
  ${(props) => toPropValue('grid-auto-columns', props.$gridAutoColumns, props.theme)}
  ${(props) => toPropValue('grid-auto-rows', props.$gridAutoRows, props.theme)}
  ${(props) => toPropValue('grid-template-columns', props.$gridTemplateColumns, props.theme)}
  ${(props) => toPropValue('grid-template-rows', props.$gridTemplateRows, props.theme)}
  ${(props) => toPropValue('grid-template-areas', props.$gridTemplateAreas, props.theme)}
  ${(props) => toPropValue('grid-area', props.$gridArea, props.theme)}
  ${(props) => toPropValue('place-items', props.$placeItems, props.theme)}
`

export default Grid