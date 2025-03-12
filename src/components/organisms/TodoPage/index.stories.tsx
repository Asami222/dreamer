import { Meta, StoryFn } from '@storybook/react'
import Todo from '.'

export default {
  title: 'Organisms/Todo',
  argTypes: {
    id: {
      control: { type: 'number' },
      description: 'TodoID',
      table: {
        type: { summary: 'number' },
      },
    },
    todo: {
      control: { type: 'text' },
      description: 'todo',
      table: {
        type: { summary: 'string' },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: 'todoImage',
      table: {
        type: { summary: 'string' },
      },
    },
    limit: {
      control: { type: 'text' },
      description: '期限',
      table: {
        type: { summary: 'string' },
      },
    },
    rate: {
      control: { type: 'number' },
      description: 'starRate',
      table: {
        type: { summary: 'number' },
      },
    },
    detail: {
      control: { type: 'text' },
      description: '詳細',
      table: {
        type: { summary: 'string' },
      },
    },
    onCopyTextClick: {
      description: 'コピーボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onRemoveTextClick: {
      description: '削除ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onDetailBtnClick: {
      description: '詳細ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Todo>

const Template: StoryFn<typeof Todo> = (args) => (
  <Todo {...args} />
)

export const Todo1 = Template.bind({})
Todo1.args = {
  id: 1,
  imageUrl: '/images/icecream.png',
  todo: '資格取得',
  limit: '期限 1年（20XX年までに）',
  rate: 3,
  detail: '◯◯になるために20XX年までに△△の資格を取得する',
}

export const Todo2 = Template.bind({})
Todo2.args = {
  id: 1,
  todo: '資格取得',
  limit: '期限 1年（20XX年までに）',
  rate: 7,
  detail: '◯◯になるために20XX年までに△△の資格を取得する',
}