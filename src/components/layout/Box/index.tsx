
import { styled } from 'styled-components'
import type { Prop } from 'types/styles'
import { toPropValue, Color, Space, AppTheme } from 'utils/styles'

export type BoxProps = {
  $color?: Prop<Color>
  $backgroundColor?: Prop<Color>
  $width?: Prop<string>
  $height?: Prop<string>
  $minWidth?: Prop<string>
  $minHeight?: Prop<string>
  $display?: Prop<string>
  $border?: Prop<string>
  $borderRadius?: Prop<string>
  $overflow?: Prop<string>
  $margin?: Prop<Space>
  $marginTop?: Prop<Space>
  $marginRight?: Prop<Space>
  $marginBottom?: Prop<Space>
  $marginLeft?: Prop<Space>
  $padding?: Prop<Space>
  $paddingTop?: Prop<Space>
  $paddingRight?: Prop<Space>
  $paddingBottom?: Prop<Space>
  $paddingLeft?: Prop<Space>
  $position?: Prop<string>
  $inset?: Prop<string>
  $textAlign?: Prop<string>
  theme: AppTheme
}

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 */
const Box = styled.div<BoxProps>`
  ${(props) => toPropValue('color', props.$color, props.theme)}
  ${(props) => toPropValue('background-color', props.$backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.$width, props.theme)}
  ${(props) => toPropValue('height', props.$height, props.theme)}
  ${(props) => toPropValue('min-width', props.$minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.$minHeight, props.theme)}
  ${(props) => toPropValue('display', props.$display, props.theme)}
  ${(props) => toPropValue('border', props.$border, props.theme)}
  ${(props) => toPropValue('border-radius', props.$borderRadius, props.theme)}
  ${(props) => toPropValue('overflow', props.$overflow, props.theme)}
  ${(props) => toPropValue('margin', props.$margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.$marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.$marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.$marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.$marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.$padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.$paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.$paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.$paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.$paddingRight, props.theme)}
  ${(props) => toPropValue('position', props.$position, props.theme)}
  ${(props) => toPropValue('text-align', props.$textAlign, props.theme)}
  ${(props) => toPropValue('inset', props.$inset, props.theme)}
`

export default Box