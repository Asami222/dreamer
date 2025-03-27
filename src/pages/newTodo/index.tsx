import type { NextPage } from 'next'
import Link from 'next/link';
import styled from "styled-components";
import Image from "next/image";
import Button3 from 'components/atoms/Button3';
import Layout from 'components/templates/Layout';
import Box from 'components/layout/Box';
import Text from 'components/atoms/Text';
import Flex from 'components/layout/Flex';

const StyledImage = styled(Image)`
  max-width: 132px;
  width: 100%;
  height: auto;
`

const NewTodo: NextPage = () => {
  return (
    <Layout>
      <Flex $flexDirection='column' $gap="32px" $alignItems="center" $justifyContent="center" $marginTop={6}>
          <Box $width="132px" $height="81px" $margin="40px auto 0">
            <StyledImage
              src="/images/rainbow1.webp"
              alt=""
              width={264}
              height={162}
              priority
            />
          </Box>
        <Box>
          <Text $color='text' $fontSize='medium'>
          夢や目標を叶えるためには小さな事を継続していくことが大切です。<br/>
          やるべきことを小さな単位にしていきましょう
          </Text>
        </Box>
        <Flex $flexDirection='column' $gap="16px" $width='90%' $margin="0 auto">
          <Button3 as={Link} href="/newTodo/year">年単位</Button3>
          <Button3 as={Link} href="/newTodo/month">月単位</Button3>
          <Button3 as={Link} href="/newTodo/week">週単位</Button3>
          <Button3 as={Link} href="/newTodo/day">日単位</Button3>
          <Button3 as={Link} href="/newTodo/time">時間単位</Button3>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default NewTodo