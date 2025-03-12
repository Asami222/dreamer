import type { NextPage } from 'next'
import RewardFormContainer from 'containers/RewardFormContainer'
import Layout from "components/templates/Layout";
import Box from 'components/layout/Box';
import Text from 'components/atoms/Text';

const NewRewardPage: NextPage = () => {

  return (
    <Layout>
      <Box $textAlign='center' $marginTop={6} $marginBottom={4}>
        <Text $color='text' $fontSize='mediumLarge' $fontWeight='400'>
          ご褒美設定
        </Text>
      </Box>
      <RewardFormContainer />
    </Layout>
  )
}

export default NewRewardPage