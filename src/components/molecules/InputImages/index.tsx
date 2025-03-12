import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Dropzone from 'components/molecules/Dropzone'
import ImagePreview from 'components/molecules/ImagePreview'

const InputImagesContainer = styled(Flex)`
  & > *:not(:first-child) {
    margin-top: 8px;
  }
`

export type FileData = {
  id?: string
  src: string
  file?: File
  selected?: boolean
  chosen?: boolean
}

interface InputImagesProps {
  name?: string
  images: FileData[]
  maximumNumber?: number
  hasError?: boolean
  width?: string
  height?: string
  $radius?: boolean
  onChange: (images: FileData[]) => void
}

/**
 * インプットイメージ
 */
const InputImages = (props: InputImagesProps) => {
  const {
    images,
    maximumNumber,
    name,
    hasError,
    width = '100px',
    height = '100px',
    onChange,
    $radius
  } = props
  const files = useMemo(
    () =>
      images
        .filter((img: FileData) => img.file)
        .map((img: FileData) => img.file as File),
    [images],
  )
  const isDropzoneDisplay =
    !maximumNumber || images.length < maximumNumber ? 'block' : 'none'

  const onRemove = useCallback(
    (src: string) => {
      const image = images.find((img: FileData) => img.src === src)
      const newImages = images.filter((img: FileData) => img.src !== src)

      if (image) {
        if (image.file && image.src) {
          URL.revokeObjectURL(image.src)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          delete (image as any).src
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onChange && onChange(newImages)
      }
    },
    [images, onChange],
  )

  const onDrop = useCallback(
    (files: File[]) => {
      const newImages = []

      for (const file of files) {
        const img = images.find((img: FileData) => img.file === file)

        if (
          !img &&
          (!maximumNumber || images.length + newImages.length < maximumNumber)
        ) {
          newImages.push({ file, src: URL.createObjectURL(file) })
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onChange && onChange(newImages)
    },
    [images, maximumNumber, onChange],
  )

  return (
    <InputImagesContainer $flexDirection="column">
      {images &&
        images.map((img, index) => {
          return (
            <ImagePreview
              alt="イメージ"
              key={index}
              src={img.src}
              onRemove={onRemove}
            />
          )
        })}
      <Box style={{ display: isDropzoneDisplay }}>
        <Dropzone
          acceptedFileTypes={[
            'image/gif',
            'image/jpeg',
            'image/jpg',
            'image/png',
          ]}
          name={name}
          height={height}
          width={width}
          value={files}
          hasError={hasError}
          onDrop={onDrop}
          $radius={$radius}
        />
      </Box>
    </InputImagesContainer>
  )
}

export default InputImages