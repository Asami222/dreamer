import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Layout from "components/templates/Layout";
import NewSigninFormContainer from "containers/NewSigninFormContainer";

const StyledImage = styled(Image)`
  max-width: 128px;
  width: 100%;
  height: auto;
`

const NewSigninPage: NextPage = () => {
  const router = useRouter()

  const handleSignin = async (err?: Error) => {
    if(!err) {
      await router.push('/signin/new/dream1')
    }
  }

  return (
    <Layout>
        <Flex $flexDirection="column" $gap="24px" $marginTop={3}>
          <Box $width="128px" $height="178px" $margin="0 10% 0 auto">
            <StyledImage
              src="/images/signinImage2.webp"
              alt=""
              width={251}
              height={354}
              priority
            />
          </Box>
          <Box $width="100%">
            <NewSigninFormContainer onNewSignin={handleSignin}/>
          </Box>
        </Flex>
    </Layout>
  )
}

export default NewSigninPage
