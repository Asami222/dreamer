import styled from 'styled-components'
import Header from 'components/organisms/Header'
import { roboto, m_plus_1p } from 'pages/_app'
import Image from 'next/image'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

interface LayoutProps {
  children: React.ReactNode
  top?: boolean
}

const StyledPageWrapper = styled(Flex)`
  width: 100vw;
  min-height: 100vh;
  overflow: auto;
`

const StyledDiv = styled.div`
  font-family: ${roboto.style.fontFamily},${m_plus_1p.style.fontFamily};
  width: 92%;
  margin: 0 auto;
`

const WrapperDiv = styled.div`
  width: 390px;
  margin: 0 auto;

  @media (max-width: 440px) {
    width: 100%;
  }

`
const StyledBox = styled(Box)`
  background: ${({theme}) => theme.colors.primaryLight};
  flex: 1;
`

export const Container = ({children}: Omit<LayoutProps, "top">) => {
  return (
    <StyledDiv>{children}</StyledDiv>
  )
}


const Layout = ({children,top}: LayoutProps) => {
  return (
    <StyledPageWrapper>
        <StyledBox $margin="0 auto" $position='relative'>
          <Image
            quality="85"
            src='/images/topImg.webp'
            alt="dremer image"
            sizes="44vw"
            fill
            style={{objectFit:"cover", objectPosition: 'right 50%'}}
            priority
          />
        </StyledBox>
        <WrapperDiv>
        { top ? '' : <Header /> }
          <Container>
            <main>{children}</main>
          </Container>
        </WrapperDiv>
        <StyledBox $margin="0 auto" $position='relative'>
          <Image
            quality="85"
            src='/images/topImg.webp'
            alt="dremer image"
            sizes="44vw"
            fill
            style={{objectFit:"cover", objectPosition: 'left 50%'}}
            priority
          />
    </StyledBox>
    </StyledPageWrapper>
  )
}
export default Layout