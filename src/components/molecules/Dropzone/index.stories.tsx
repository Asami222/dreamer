import { useState, useEffect } from "react";
import { Meta, StoryFn } from '@storybook/react'
import Dropzone from ".";
import Box from "components/layout/Box";

export default {
  title: 'Molecules/Dropzone',
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '縦幅',
      table: {
        type: { summary: 'number'},
      },
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number'},
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションフラグ',
      table: {
        type: { summary: 'boolean'},
      },
    },
    acceptedFileTypes: {
      options: {
        control: { type: 'array' },
        description: '受け付けるファイルタイプ',
        table: {
          type: { summary: 'array'},
        },
      },
    },
    onDrop: {
      description: 'ファイルがドロップ入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function'},
      },
    },
    onChange: {
      description: 'ファイルが入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function'},
      },
    },
  },
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any as Meta<typeof Dropzone>

const Template: StoryFn<typeof Dropzone> = (args) => {
  const [ files, setFiles ] = useState<File[]>([])
  const handleDrop = (files: File[]) => {
    setFiles(files)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    args && args.onDrop && args.onDrop(files)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const res = await fetch('/images/bear1.png')
    const blob = await res.blob()
    const file = new File([blob], '1.png', blob)
    setFiles([...files, file])
  }

  useEffect(() => {
    fetchData()
  },[fetchData])

  return (
    <>
      <Box $marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box>
        {files.map((f,i) => (
          //eslint-disable-next-line @next/next/no-img-element
          <img
          src={URL.createObjectURL(f)}
          width="100px"
          key={i}
          alt="sample"
          />
        ))}
      </Box>
    </>
  )
}

export const WithControl = Template.bind({})
WithControl.args = {
  height: 100,
  width: 100,
  acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
  $hasError: false,
}