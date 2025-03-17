import React, { useState, useRef } from 'react'
import Image from "next/image";
import styled from "styled-components";
import CheckBox from "components/molecules/CheckBox";
import Text from "components/atoms/Text";
import Button1 from "components/atoms/Button1";
import Flex from "components/layout/Flex";
import Box from "components/layout/Box";
import { StarRating2 } from "components/molecules/StarRating";

const TodoText = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

interface TodoProps {
  id: number
  imageUrl?: string
  todo: string
  limit?: number[]
  limitDetail?: string
  rate?: number
  description?: string
  className?: string
  limitPeriod?: string
  onCopyTextClick?: (id: number) => void
  onRemoveTextClick?: (id: number, rate?: number, isChecked?: boolean) => void
}

const BaseTodo = ({
  id,
  imageUrl,
  todo,
  limit,
  limitDetail,
  rate,
  description,
  className,
  limitPeriod,
  onCopyTextClick,
  onRemoveTextClick,
}: TodoProps) => {

  const [textIsOpen, setTextIsOpen] = useState(false)

  const [isChecked, setIsChecked] = useState(false)

  const onDetailBtnClick = () => {
    setTextIsOpen((prev)=> !prev)
  }

  const refText = useRef<HTMLDivElement>(null)
  
  return (
    <Box $padding="16px" $backgroundColor="secondary" $width="100%" className={className} $borderRadius='5px'>
    <Flex $gap="8px" className={textIsOpen ? 'open' : 'close'} $alignItems='center'>
      <Flex $flexDirection="column" $alignItems="center" $alignSelf="center" $gap="4px" $width="48px" $color='text'>
        <TodoText 
          color="text"
          $fontSize="15px"
          onClick={() => onCopyTextClick && onCopyTextClick(id)}
        >
          コピー
        </TodoText>
        <CheckBox setIsChecked={setIsChecked} isChecked={isChecked}/>
        <TodoText 
          color="text"
          $fontSize="15px"
          onClick={() => onRemoveTextClick && onRemoveTextClick(id,rate,isChecked)}
        >
          完了
        </TodoText>
      </Flex>
      <Flex $flexDirection="column" $gap="16px" $flexGrow="1">
        { imageUrl &&
          <Box $width="100px" $height="98px" $margin="0 auto" $position='relative'>
            <Image
              quality="85"
              src={imageUrl}
              alt="Todoイメージ"
              sizes="25.6vw"
              fill
              style={{objectFit:"contain", objectPosition: '50% 50%'}}
              priority
            />
          </Box>
        }
        <Flex $flexDirection="column" $gap="8px">
          <Text $fontSize="medium" $fontWeight="500" $color='text'>{todo}</Text>
          {limit && limit.length === 2 &&
          <Text $fontSize="extraSmall" $fontWeight="400" $color='text'>期限&emsp;{limit[0]}時から{limit[1]}時まで{limitPeriod}（{limitDetail}）</Text>
          }
          {limit && limit.length === 1 &&
          <Text $fontSize="extraSmall" $fontWeight="400" $color='text'>期限&emsp;{limit[0]}{limitPeriod}（{limitDetail}）</Text>
          }
          <Flex $justifyContent="space-between">
            <StarRating2 num={rate}/>
            <Button1 
              color="text"
              width="64px"
              height="28px" 
              fontSize="extraSmall" 
              $borderRadius="3px" 
              $selectColor="Orange"
              $textAlign="center"
              display='inline-block'
              $padding="4px 16px"
              onClick={onDetailBtnClick }
              disabled={description ? false : true}
            >
              詳細
            </Button1>
          </Flex>
          {description && 
            <Text 
              $fontSize="extraSmall" 
              $fontWeight="400" 
              $color='detailText' 
              className='text'
              ref={refText}
              style={{ ['--text-height' as string]: refText.current ? `${refText.current.scrollHeight}px` : '0px', }}
            >{description}</Text>
          }
        </Flex>
      </Flex>
    </Flex>
    </Box>
  )
}

const TodoPage = styled(BaseTodo)`
  .text {
    overflow: hidden;
    height: 0px;
    transition: height 0.5s;
  }
  
  .open .text {
    height: var(--text-height);
  }
`;

export default TodoPage