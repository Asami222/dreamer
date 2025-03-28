import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Flex from "components/layout/Flex";
import Box from "components/layout/Box";
import Button2 from "components/atoms/Button2";
import AppLogo from "components/atoms/AppLogo";
import { roboto, m_plus_1p } from 'pages/_app'
import Layout from "components/templates/Layout";

const StyledFlex = styled(Flex)`
  font-family: ${roboto.style.fontFamily},${m_plus_1p.style.fontFamily};
`
const StyledBox = styled(Box)`
  .image {
    display: block;
  }
  @media (min-width: 441px) {
    display: none;
  }
`

const Home = () => {
  return (
    <Layout top>
      <Flex $width="auto" $height="100dvh" $alignItems="center" $justifyContent="center" $padding="20px 0">
      <StyledFlex $flexDirection="column" $alignItems="center" $justifyContent="center" $gap="8px">
        <AppLogo width="184px"/>
        <StyledBox $width="366px" $height="506px" className="image">
          <Image
            width={732}
            height={1012}
            src='/images/homeImg.webp'
            alt="Dreamer Image"
            placeholder="blur"
            blurDataURL={'/images/homeImg.webp'}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </StyledBox>
        <Box $padding={2}>
        <Button2 
          $selectcolor="Pink"
          as={Link}
          href="/signin"
        >
          はじめる
        </Button2>
        </Box>
      </StyledFlex>
    </Flex>
    </Layout>
  )
}

export default Home
