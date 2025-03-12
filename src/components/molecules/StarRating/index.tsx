import React from 'react'
import { StarIcon } from "components/atoms/IconButton";
//import styled from "styled-components";
import Flex from 'components/layout/Flex';

interface StarProps {
  selected?: boolean
  onSelect?: () => void
}

interface StarRating1Props {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

interface StarRating2Props {
  num?: number
}

const Star1 =({
  selected = false,
  onSelect
}: StarProps) => {
  return (
    <StarIcon size={38} color={selected ? "starLight" : "secondary"} onClick={onSelect}/>
  );
}

const Star2 = ({
  selected = false,
}: StarProps) => {
  return (
    <StarIcon size={24} color={selected ? "starDark" : "starDefault"} />
  )
}

export const StarRating1 =({
  value,
  setValue
}: StarRating1Props) => {
  
  return (
    <Flex $gap='4px'>
    {[...Array(7)].map((n,i) => (
      <Star1
        key={i}
        selected={value > i}
        onSelect={() => setValue(i + 1)}
      />
    ))}
    </Flex>
  )
}


export const StarRating2 =(props: StarRating2Props) => {
  const {num = 0 } = props
 const defaultStar = 7 - num
  
  return (
    <Flex $gap='4px'>
    {[...Array(num)].map((n,i) => (
      <Star2
        key={i}
        selected={true}
      />
    ))}
    {[...Array(defaultStar)].map((n,i) => (
      <Star2
        key={i}
        selected={false}
      />
    ))}
    </Flex>
  )
}

