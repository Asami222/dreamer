import { useEffect } from 'react'
import ShapeImage from "components/atoms/ShapeImage";
import Text from "components/atoms/Text";
import Flex from "components/layout/Flex";
import Box from "components/layout/Box";
import { StarIcon } from "components/atoms/IconButton";
import { useTotalStarContext } from "contexts/TotalStarContext";
//import { useTotalStarContext } from 'contexts/TotalStarContext';
//import { useTotalStarContext, useTotalStarActionsContext } from "contexts/TotalStarContext";

interface UserProfileProps {
  username: string
  profileImageUrl: string
  numberOfStars: number
  dream?: string
  limit?: string
}

const UserProfile = ({
  username,
  profileImageUrl,
  numberOfStars,
  dream,
  limit
}: UserProfileProps) => {

  const { totalStar, setStar } = useTotalStarContext()

  useEffect(() => {
  setStar(numberOfStars)
  }, [numberOfStars, setStar]);

  return (
    <Flex $flexDirection="column" $gap="24px" $alignItems="center" $marginBottom={2}>
      <Flex $alignItems="center" $gap="16px">
          <ShapeImage
            src={profileImageUrl ? profileImageUrl : '/images/noImage.png'}
            shape='circle'
            width="100px"
            height="98px"
          />
        <Flex $flexDirection="column" $alignItems="center" $gap="8px">
          <Text
            $fontWeight="500"
            $fontSize="mediumLarge"
            $lineHeight={2}
            $color="text"
          >
            {username}
          </Text>
          <Flex $gap="4px" $alignItems="center">
            <StarIcon size={20} color="starLight"/>
            <Text $fontSize="medium" $color="text">x{totalStar}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box $textAlign="center">
        <Text as='p' $fontSize="mediumLarge" $color="text" $margin={0}>{dream? dream : ''}</Text>
        <Text as='p' $fontSize="medium" $color="text" $margin={0}>{limit?`（${limit}）`: ''}</Text>
      </Box>
    </Flex>
  )
}

export default UserProfile