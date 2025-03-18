import type { NextPage } from 'next'
import Layout from "components/templates/Layout"
import Box from 'components/layout/Box'
import Text from 'components/atoms/Text'

const NotFoundPage: NextPage = () => {
  
  return (
    <Layout>
      <Box $textAlign='center' $marginTop={7}>
        <Text $color='text' $fontSize='large'>
        ページが見つかりません
        </Text>
      </Box>
    </Layout>
  )
}

export default NotFoundPage