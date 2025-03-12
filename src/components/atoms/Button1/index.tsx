
import { styled } from 'styled-components'
import { Prop } from 'types/styles'
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
  AppTheme
} from 'utils/styles'


// ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary'
type SelectColor = 'Orange' | 'Yellow' | 'Pink'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  $variant?: ButtonVariant
  fontSize?: Prop<FontSize>
  fontWeight?: Prop<string>
  letterSpacing?: Prop<LetterSpacing>
  lineHeight?: Prop<LineHeight>
  $textAlign?: Prop<string>
  color?: Prop<Color>
  backgroundColor?: Prop<Color>
  width?: Prop<string>
  height?: Prop<string>
  minWidth?: Prop<string>
  minHeight?: Prop<string>
  display?: Prop<string>
  border?: Prop<string>
  borderBottom?: Prop<string>
  $borderRadius?: Prop<string>
  overflow?: Prop<string>
  margin?: Prop<Space>
  marginTop?: Prop<Space>
  marginRight?: Prop<Space>
  marginBottom?: Prop<Space>
  marginLeft?: Prop<Space>
  $padding?: Prop<Space>
  paddingTop?: Prop<Space>
  paddingRight?: Prop<Space>
  paddingBottom?: Prop<Space>
  paddingLeft?: Prop<Space>
  pseudoClass?: {
    hover?: {
      color?: Prop<Color>
      backgroundColor?: Prop<Color>
    }
    disabled?: {
      backgroundColor?: Prop<Color>
    }
  }
  pseudoElement?: {
    before?: {
      backgroundColor?: Prop<Color>
    }
    after?: {
      backgroundColor?: Prop<Color>
    }
  }
  $selectColor?: SelectColor
  theme?: AppTheme
}

const variants = {
  // プライマリ
  primary: {
    color: 'text',
    border: 'none',
    pseudoClass: {
      hover: {
        color: 'text',
      },
      disabled: {
        color: 'text',
      },
    },
  },
  // セカンダリ
  secondary: {
    color: 'white',
    backgroundColor: 'btn1Gra2',
    border: 'none',
    pseudoClass: {
      hover: {
        color: 'text',
      },
      disabled: {
        color: 'white',
      },
    },
  },
  // デンジャー
  /*
  danger: {
    color: 'white',
    backgroundColor: 'transparent',
    border: '#ed1c24',
    pseudoClass: {
      hover: {
        backgroundColor: 'transparent',
      },
      disabled: {
        backgroundColor: 'transparent',
      },
    },
    pseudoElement: {
      before: {
        backgroundColor: 'btnGra1',
      },
      after: {
        backgroundColor: 'btnGra1Back'
      },
    },
  },
*/
}

/**
 * ボタン
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Button1 = styled.button.attrs<ButtonProps>(() => ({
  style: {
   
  }
}))<ButtonProps>`
  ${({ $variant, color, pseudoClass, theme }) => {
    // バリアントのスタイルの適用
    if ($variant && variants[$variant]) {
      const styles = []
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !color &&
        styles.push(toPropValue('color', variants[$variant].color, theme))
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toPropValue(
              'color',
              variants[$variant].pseudoClass.hover.color,
              theme,
            )}
          }`.replaceAll('\n', ''),
        )
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toPropValue(
              'color',
              variants[$variant].pseudoClass.disabled.color,
              theme,
            )}
          }`.replaceAll('\n', ''),
        )
      return styles.join('\n')
    }
  }}
  ${(props) => toPropValue('font-size', props.fontSize, props.theme)}
  ${(props) => toPropValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => toPropValue('line-height', props.lineHeight, props.theme)}
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('borderRadius', props.$borderRadius, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.$padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}
  ${(props) => toPropValue('border-bottom', props.borderBottom, props.theme)}
  &:hover {
    background: ${({ $selectColor, theme }) => 
      ($selectColor === 'Orange' ? 
        theme.colors.btnSimpleOrangeHover 
        : $selectColor === 'Yellow' ? 
        theme.colors.btnSimpleYellowHover
        : '#D87974'
    )};
    transition: all 0.1s;
  }
  &:disabled {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor,
      )}
    background: ${({ $selectColor, theme }) => 
      ($selectColor === 'Orange' ? 
        theme.colors.btnSimpleOrange 
        : $selectColor === 'Yellow' ?
        theme.colors.btnSimpleYellow
        : theme.colors.btnSimplePink
    )};
  }
  color: ${({ $selectColor, theme }) => ($selectColor ==="Pink" ? theme.colors.secondary : theme.colors.text)};
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border: ${({ $selectColor, theme }) => ($selectColor ==="Pink" ? `1px solid ${theme.colors.secondary}` : 'none')};
  border-radius: 5px;
  font-weight: 400;
  background: ${({ $selectColor, theme }) => 
    ($selectColor === 'Orange' ?
       theme.colors.btnSimpleOrange 
       : $selectColor === 'Yellow' ?
       theme.colors.btnSimpleYellow
       : theme.colors.btnSimplePink
      )};
  box-shadow: 0 2px 4px 0 rgba(177, 88, 82, 0.25);
  transition: all 0.5s;
`
/*
Button.defaultProps = {
  variant: 'primary',
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 1,
  paddingBottom: 1,
  color: 'white',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  fontSize: 'inherit',
}
*/

export default Button1
