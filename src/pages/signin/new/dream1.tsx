import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Layout from "components/templates/Layout";
import NewDreamFormContainer from "containers/NewDreamFormContainer";

const StyledImage = styled(Image)`
  max-width: 120px;
  width: 100%;
  height: auto;
`

const DreamPage1: NextPage = () => {
  const router = useRouter()
  const handleSignin = async (err?: Error) => {
    if(!err) {
      await router.push('/newTodo')
    }
  }

  return (
    <Layout>
        <Flex $flexDirection="column" $gap="24px" $marginTop={3} $marginBottom={6}>
          <Box $width="120px" $height="67px" $margin="40px auto 0">
            <StyledImage
              src="/images/shootingstar1.webp"
              alt=""
              width={241}
              height={133}
              priority
            />
          </Box>
          <Box $width="100%">
            <NewDreamFormContainer onSave={handleSignin} />
          </Box>
        </Flex>
    </Layout>
  )
}

export default DreamPage1