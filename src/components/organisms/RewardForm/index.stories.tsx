import { Meta, StoryFn } from '@storybook/react'
import RewardForm from '.'

export default {
  title: 'Organisms/RewardForm',
  argTypes: {
    onRewardSave: {
      description: 'Todo追加ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof RewardForm>

const Template: StoryFn<typeof RewardForm> = (args) => (
  <RewardForm {...args} />
)
export const Form = Template.bind({})