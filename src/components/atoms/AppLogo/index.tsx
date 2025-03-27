import Image from 'next/image'
import Box from 'components/layout/Box'

interface AppLogoProps {
  width: string
}

const AppLogo = ({width}: AppLogoProps) => {
  return (
    <Box $width={width}>
      <Image
        quality="85"
        width={567}
        height={150}
        src='/images/logoApp.webp'
        alt="Dreamer"
        sizes="20vw"
        style={{width: '100%', height: 'auto'}}
        priority
      />
    </Box>
  )
}

export default AppLogo