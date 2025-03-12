
import { StarIcon, CancelIcon } from "components/atoms/IconButton";
import Separator from 'components/atoms/Separator';
import Text from "components/atoms/Text";
import Flex from "components/layout/Flex";
import Box from "components/layout/Box";

//import { GotReward } from 'types/data';

interface GotRewardCardProps {
  id: number
  gotreward: string
  starNum: number
  time: string
  onRemoveButtonClick?: (id: number) => void
}


const GotRewardCard =({
  id,
  gotreward,
  starNum,
  time,
  onRemoveButtonClick
}: GotRewardCardProps) => {
  return(
    <Flex $flexDirection='column' $gap="8px">
      <Box $marginLeft={2}><Text $fontSize="medium" $color="text" $fontWeight="500">{gotreward}</Text></Box>
      <Flex $gap="16px" $alignItems="center" $marginLeft={2} $marginRight={2} $justifyContent="space-between">
          <Flex $gap="16px" $alignItems="center">
            <Flex $gap="4px" $alignItems="center">
              <StarIcon size={20} color="starLight"/>
              <Text $fontSize="medium" $color="text">x{starNum}</Text>
            </Flex>
            <Text $fontSize="medium" $color="text">{time}</Text>
          </Flex>
          <CancelIcon size={20} color='text' onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}/>
      </Flex>
      <Separator/>
    </Flex>
  )
}

export default GotRewardCard