//import { useEffect } from 'react'
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Text from "components/atoms/Text";
import Layout from "components/templates/Layout";
import SigninFormContainer from "containers/SigninFormContainer";
import { useAuthContext } from "contexts/AuthContext";

const StyledImage = styled(Image)`
  max-width: 128px;
  width: 100%;
  height: auto;
`
const SigninPage: NextPage = () => {
  const router = useRouter()
  const { authUser } = useAuthContext()

  const handleSignin = async(err?: Error) => {
    if(authUser && !err) {
         router.refresh()
    }
  }

  return (
    <Layout>
      { authUser ? (
        <Flex $gap="8px" $marginTop={6} $alignItems="center" $justifyContent="center">
        <Box $paddingTop={6} $textAlign="center">
          <Box><Text $color="text" $fontSize="large">Welcome!<br/>{authUser.displayName? authUser.displayName : authUser.username}!</Text></Box>
          <Box $marginTop={3}><Text $color="text" $fontSize="mediumLarge">Enjoy Dreamer!</Text></Box>
        </Box>
        <Box $width="128px" $height="178px">
          <StyledImage
            src="/images/signinImage.webp"
            alt=""
            width={249}
            height={355}
            priority
          />
        </Box>
      </Flex>
        ):(
          <Flex $flexDirection="column" $gap="24px" $marginTop={3} >
          <Box $width="128px" $height="178px" $margin="0 10% 0 auto">
            <StyledImage
              src="/images/signinImage.webp"
              alt=""
              width={249}
              height={355}
              placeholder="blur"
              blurDataURL={'/images/signinImage.webp'}
            />
          </Box>
          <Box $width="100%">
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
        )
      }
    </Layout>
  )
}

export default SigninPage
