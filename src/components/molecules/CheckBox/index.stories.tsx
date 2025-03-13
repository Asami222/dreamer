import { Meta, StoryFn } from '@storybook/react'
import CheckBox from './index'
import { SetStateAction } from 'react'

export default {
  title: 'Molecules/CheckBox',
  argTypes: {
    onClick: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof CheckBox>

const Template: StoryFn<typeof CheckBox> = () => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <CheckBox isChecked={false} setIsChecked={function (value: SetStateAction<boolean>): void {
    throw new Error('Function not implemented.')
  } }  />
)

export const WithLabel = Template.bind({})
WithLabel.args = { }