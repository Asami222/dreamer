import React, { useState, useRef, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { FileUploadIcon } from 'components/atoms/IconButton'

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const isDragEvt = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer
}

const isInput = (value: EventTarget | null): value is HTMLInputElement => {
  return value !== null
}
const getFilesFromEvent = (e: React.DragEvent | React.ChangeEvent): File[] => {
  if(isDragEvt(e)) {
    return Array.from(e.dataTransfer.files)
  } else if(isInput(e.target) && e.target.files) {
    return Array.from(e.target.files)
  }
  return []
}

type FileType = 
| 'image/png'
| 'image/jpeg'
| 'image/jpg'
| 'image/gif'
| 'video/mp4'
| 'video/quicktime'
| 'application/pdf'

interface DropzoneProps {
  value?: File[]
  name?: string
  acceptedFileTypes?: FileType[]
  width?: number | string
  height?: number | string
  $hasError?: boolean
  $radius?: boolean
  onDrop?: (files: File[]) => void
  onChange?: (files: File[]) => void
}

type DropzoneRootProps = {
  $isFocused?: boolean
  $hasError?: boolean
  width: string | number
  height: string | number
  $radius?: boolean
}

const DropzoneRoot = styled.div<DropzoneRootProps>`
border: 1px dashed
${({ $isFocused, $hasError}) => {
  if($hasError) {
    return '#ed1c24'
  } else if($isFocused) {
    return '#E18883'
  } else {
    return 'transparent'
  }
}};
background: url('/images/bear2.png'), rgba(243,228,227,0.65);
background-repeat: no-repeat;                         /* 画像の繰り返しを指定  */              
background-position: center center;  
background-size: contain; 
background-blend-mode: lighten;
border-radius: ${({ $radius }) => $radius ? '50px' : '5px'};
cursor: pointer;
width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
height: ${({height}) => typeof height === 'number' ? `${height}px` : height};
`
const DropzoneContent = styled.div<{
  width: string | number
  height: string | number
}>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: ${({width}) => (typeof width === 'number' ? `${width}px` : width)};
height: ${({height}) => (typeof height === 'number' ? `${height}px` : height)};
`
const DropzoneInputFile = styled.input`
display: none;
`
const Dropzone = (props: DropzoneProps) => {
  const {
    onDrop,
    onChange,
    value = [],
    name,
    acceptedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    $hasError,
    width = '100px',
    height = '100px',
    $radius
  } = props
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [ isFocused, setIsFocused] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false)
    const files = value.concat(
      getFilesFromEvent(e).filter((f) => acceptedFileTypes.includes(f.type as FileType),
    ),
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onDrop && onDrop(files)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onChange && onChange(files)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(false)
    const files = value.concat(
      getFilesFromEvent(e).filter((f) => acceptedFileTypes.includes(f.type as FileType),
    ),
    )
    if(files.length == 0) {
      return window.alert(
        `次のファイルフォーマットは指定できません${acceptedFileTypes.join(',',)}`
      )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onDrop && onDrop(files)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onChange && onChange(files)
  }

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  },[])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(false)
  },[])

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(true)
  },[])

  const handleClick = () => {
    inputRef.current?.click()
  }

  useEffect(() => {
    if(inputRef.current && value && value.length == 0) {
      inputRef.current.value = ''
    }
  },[value])

  return (
    <>
      <DropzoneRoot
        ref={rootRef}
        $isFocused={isFocused}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnter={handleDragEnter}
        onClick={handleClick}
        $hasError={$hasError}
        width={width}
        height={height}
        data-testid="dropzone"
        $radius={$radius}
      >
        <DropzoneInputFile
        ref={inputRef}
        type="file"
        name={name}
        accept={acceptedFileTypes.join(',')}
        onChange={handleChange}
        multiple 
        />
        <DropzoneContent width={width} height={height}>
          <FileUploadIcon size={32} color='borderDash'/>
        </DropzoneContent>
      </DropzoneRoot>
    </>
  )
}

Dropzone.defaultProps = {
  acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
  hasError: false,
}

export default Dropzone


