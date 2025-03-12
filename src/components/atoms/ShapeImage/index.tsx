import Image from 'next/image'
import Box from 'components/layout/Box'
import styled from 'styled-components'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = { 
  src: string
  shape?: ImageShape
  width: string
  height: string
}

const ImageWithShape = styled(Box)<{ shape?: ImageShape }>`
  position: relative;
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '5px')};
`

/**
 * シェイプイメージ
 */
const ShapeImage = (props: ShapeImageProps) => {
  const { shape, src, width, height } = props

  return (
  <ImageWithShape shape={shape} $width={width} $height={height}>
  <Image
    quality="85"
    src={src}
    alt="イメージ"
    sizes="25.6vw"
    fill
    style={{objectFit:"contain", objectPosition:'50% 50%'}}
    priority
   />
  </ImageWithShape>
  )
}

export default ShapeImage