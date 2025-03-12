import { Meta, StoryFn } from '@storybook/react'
import { StarRating1 } from '.'

export default {
  title: 'Molecules/StarRating',
  argTypes: {
    onClick: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof StarRating1>

const Template: StoryFn<typeof StarRating1> = () => (
  <StarRating1  />
)

export const Rate = Template.bind({})
Rate.args = { }