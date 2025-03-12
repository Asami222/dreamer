import Image from 'next/image'
import styled from 'styled-components'
import { CloseIcon } from 'components/atoms/IconButton'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

const ImagePreviewContainer = styled(Box)`
  position: relative;
`

const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(243, 228, 227, 0.66);
  cursor: pointer;
`

interface ImagePreviewProps {
  /**
   * 画像URL
   */
  src: string
  /**
   * 代替テキスト
   */
  alt?: string
  /**
   * 縦幅
   */
  height?: string
  /**
   * 横幅
   */
  width?: string
  /**
   * 削除ボタンを押した時のイベントハンドラ
   */
  onRemove?: (src: string) => void
}

/**
 * イメージプレビュー
 */
const ImagePreview = ({
  src,
  height = '100px',
  width = '100px',
  onRemove,
}: ImagePreviewProps) => {
  // 閉じるボタンを押したらonRemoveを呼ぶ
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onRemove && src && onRemove(src)

    return false
  }

  return (
    <ImagePreviewContainer $height={height} $width={width}>
      <Box $height={height} $width={width}>
      <Image
        quality="85"
        src={src}
        alt="イメージ"
        sizes="25.6vw"
        fill
        style={{objectFit: "contain", objectPosition: '50% 50%'}}
      />
      </Box>
      <CloseBox
        $alignItems="center"
        $justifyContent="center"
        onClick={handleCloseClick}
      >
        <CloseIcon size={24} color="white" />
      </CloseBox>
    </ImagePreviewContainer>
  )
}

export default ImagePreview