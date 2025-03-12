/** eslint-disable prettier/prettier */

import styled from 'styled-components'
import type { Prop } from 'types/styles'
import {
  toPropValue,
  Space,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  AppTheme,
} from 'utils/styles'

// テキストバリアント
export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'

export type TextProps = {
  $variant?: TextVariant
  $fontSize?: Prop<FontSize>
  $fontWeight?: Prop<string>
  $letterSpacing?: Prop<LetterSpacing>
  $lineHeight?: Prop<LineHeight>
  $textAlign?: Prop<string>
  $color?: Prop<Color>
  $backgroundColor?: Prop<Color>
  $width?: Prop<string>
  $height?: Prop<string>
  $minWidth?: Prop<string>
  $minHeight?: Prop<string>
  $display?: Prop<string>
  $border?: Prop<string>
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
  $textDecoration?: Prop<string>
  theme?: AppTheme
}

const variants = {
  extraSmall: {
    fontSize: 'extraSmall',
    letterSpacing: 0,
    lineHeight: 0,
  },
  small: {
    fontSize: 'small',
    letterSpacing: 1,
    lineHeight: 1,
  },
  medium: {
    fontSize: 'medium',
    letterSpacing: 2,
    lineHeight: 2,
  },
  mediumLarge: {
    fontSize: 'mediumLarge',
    letterSpacing: 3,
    lineHeight: 3,
  },
  large: {
    fontSize: 'large',
    letterSpacing: 4,
    lineHeight: 4,
  },
  extraLarge: {
    fontSize: 'extraLarge',
    letterSpacing: 5,
    lineHeight: 5,
  },
}

/**
 * テキスト
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Text = styled.span.attrs<TextProps>(() => ({
  style: {
    
  }
}))<TextProps>`
  ${({ $variant, $fontSize, $letterSpacing, $lineHeight, theme }) => {
    // バリアントのスタイルの適用
    if ($variant && variants[$variant]) {
      const styles = []
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !$fontSize &&
        styles.push(toPropValue('font-size', variants[$variant].fontSize, theme))
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !$letterSpacing &&
        styles.push(
          toPropValue('letter-spacing', variants[$variant].letterSpacing, theme),
        )
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !$lineHeight &&
        styles.push(
          toPropValue('line-height', variants[$variant].lineHeight, theme),
        )
      return styles.join('\n')
    }
  }}
  ${(props) => toPropValue('font-size', props.$fontSize, props.theme)}
  ${(props) => toPropValue('font-weight', props.$fontWeight, props.theme)}
  ${(props) => toPropValue('letter-spacing', props.$letterSpacing, props.theme)}
  ${(props) => toPropValue('line-height', props.$lineHeight, props.theme)}
  ${(props) => toPropValue('color', props.$color, props.theme)}
  ${(props) => toPropValue('background-color', props.$backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.$width, props.theme)}
  ${(props) => toPropValue('height', props.$height, props.theme)}
  ${(props) => toPropValue('min-width', props.$minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.$minHeight, props.theme)}
  ${(props) => toPropValue('display', props.$display, props.theme)}
  ${(props) => toPropValue('border', props.$border, props.theme)}
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
  ${(props) => toPropValue('text-decoration', props.$textDecoration, props.theme)}
`
/*
Text.defaultProps = {
  variant: 'medium',
  color: 'text',
}
*/
export default Text