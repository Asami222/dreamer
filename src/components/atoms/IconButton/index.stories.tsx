import { Meta, StoryFn } from '@storybook/react'
import { 
  ChecklistIcon, 
  FileUploadIcon, 
  AccountCircleIcon,  
  TaskAltIcon,
  KeyboardDoubleArrowRightIcon,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
  StarIcon,
  DoneIcon,
  DoneOutlineIcon,
  CancelPresentationIcon,
  DeleteForeverIcon,
  CancelIcon,
  CloseIcon,
 } from './'

export default {
  title: 'Atoms/IconButton',
  argTypes: {
    color: {
      control: { type: 'string' },
      description: 'アイコン色',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'アイコンのサイズ',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof ChecklistIcon>

const Template: StoryFn<typeof ChecklistIcon> = (args) => (
  <>
    <ChecklistIcon {...args} />
    <FileUploadIcon {...args} />
    <AccountCircleIcon {...args} />
    <TaskAltIcon {...args} />
    <KeyboardDoubleArrowRightIcon {...args} />
    <KeyboardArrowDownIcon {...args} />
    <KeyboardArrowUpIcon {...args} />
    <StarIcon {...args} />
    <DoneIcon {...args} />
    <DoneOutlineIcon {...args} />
    <CancelIcon {...args} />
    <CancelPresentationIcon {...args} />
    <CloseIcon {...args} />
    <DeleteForeverIcon {...args} />
  </>
)

export const Normal = Template.bind({})