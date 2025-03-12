import React, { useCallback } from 'react'
import styled from 'styled-components'
import Flex from 'components/layout/Flex'
//import Text from 'components/atoms/Text'
import { DoneIcon } from 'components/atoms/IconButton'

interface CheckBoxProps {
  isChecked: boolean
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledCheckBox = styled(Flex)`
  cursor: pointer;
`

const CheckBox = ({setIsChecked, isChecked}: CheckBoxProps) => {

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsChecked((isChecked) => !isChecked)
    },[setIsChecked],
  )

  return (
    <>
      <StyledCheckBox 
      $width='48px' 
      $height='46px' 
      $border='1px solid #E2B3B0'
      $backgroundColor='checkbox'
      $borderRadius='5px'
      $justifyContent='center'
      $alignItems='center'
      onClick={onClick}
      >
        { isChecked ? <DoneIcon size={24} color='borderDash'/> : '' }
      </StyledCheckBox>
    </>
  )
}

export default CheckBox