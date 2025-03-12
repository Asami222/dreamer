import React, { useCallback, useState } from 'react'
import styled, { css }from 'styled-components'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 最小行数
   */
  minRows?: number
  /**
   * 最大行数
   */
  maxRows?: number
  /**
   * バリデーションエラーフラグ
   */
  $hasError?: boolean
  $hasBorder?: boolean
}

const StyledTextArea = styled.textarea<{ $hasError?: boolean, $hasBorder?: boolean}>`
  color: ${({theme}) => theme.colors.inputText};
  ${({ $hasBorder, $hasError, theme }) => {
    if ($hasBorder) {
      return css`
        border: 3px dashed
          ${$hasError ? theme.colors.danger : theme.colors.borderDash};
        border-radius: 20px;
        padding: 9px 16px 10px 16px;
      `
    } else {
      return css`
        border: none;
        border-radius: 5px;
        padding: 9px 12px 10px 12px;
      `
    }
  }}
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: ${({theme}) => theme.fontSizes.smallMedium};
  line-height: 24px;
  resize: none;
  overflow: auto;
  height: auto;
  background-color: ${({theme}) => theme.colors.secondary};
  &::placeholder {
    color: ${({theme}) => theme.colors.placeholder};
  }
`

/**
 * テキストエリア
 */
const TextArea = (props: TextAreaProps) => {
  const {
    rows = 3,
    minRows = 3,
    maxRows = 10,
    children,
    $hasError,
    onChange,
    ...rest
  } = props
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows))

  console.assert(
    !(rows < minRows),
    'TextArea: rows should be greater than minRows.',
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24
      const previousRows = e.target.rows

      e.target.rows = minRows // 行数のリセット

      // 現在の行数
      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight)

      if (currentRows === previousRows) {
        e.target.rows = currentRows
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows
        e.target.scrollTop = e.target.scrollHeight
      }

      // 最大を超えないように行数をセット
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onChange && onChange(e)
    },
    [onChange, minRows, maxRows],
  )

  return (
    <StyledTextArea
      $hasError={$hasError}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </StyledTextArea>
  )
}

export default TextArea