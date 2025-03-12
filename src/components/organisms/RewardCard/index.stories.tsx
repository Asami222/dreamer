import { Meta, StoryFn } from '@storybook/react'
import Reward from '.'

export default {
  title: 'Organisms/Reward',
  argTypes: {
    id: {
      control: { type: 'number' },
      description: 'ご褒美ID',
      table: {
        type: { summary: 'number' },
      },
    },
    reward: {
      control: { type: 'text' },
      description: 'ご褒美名',
      table: {
        type: { summary: 'string' },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: 'ご褒美イメージ',
      table: {
        type: { summary: 'string' },
      },
    },
    starNum: {
      control: { type: 'number' },
      description: '必要な星の数',
      table: {
        type: { summary: 'number' },
      },
    },
    getStarNum: {
      control: { type: 'number' },
      description: '持っている星の数',
      table: {
        type: { summary: 'number' },
      },
    },
    onRemoveButtonClick: {
      description: '削除ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onChangeButtonClick: {
      description: '変換するボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Reward>

const Template: StoryFn<typeof Reward> = (args) => (
  <Reward {...args} />
)

export const Reward1 = Template.bind({})
Reward1.args = {
  id: 1,
  imageUrl: '/images/bear1.png',
  reward: 'テディベア',
  starNum: 100,
}

export const Reward2 = Template.bind({})
Reward2.args = {
  id: 2,
  imageUrl: '/images/macaron.png',
  reward: 'マカロン',
  starNum: 10,
}

export const Reward3 = Template.bind({})
Reward3.args = {
  id: 3,
  imageUrl: '/images/icecream.png',
  reward: 'アイスクリーム',
  starNum: 10,
}