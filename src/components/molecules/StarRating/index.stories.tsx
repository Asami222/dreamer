import { Meta, StoryFn } from '@storybook/react'
import { StarRating1 } from '.'
import { SetStateAction } from 'react'

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <StarRating1 value={0} setValue={function (value: SetStateAction<number>): void {
    throw new Error('Function not implemented.')
  } }  />
)

export const Rate = Template.bind({})
Rate.args = { }