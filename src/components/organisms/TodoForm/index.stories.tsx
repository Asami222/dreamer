import { Meta, StoryFn } from '@storybook/react'
import TodoForm from '.'

export default {
  title: 'Organisms/TodoForm',
  argTypes: {
    onTodoSave: {
      description: 'Todo追加ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof TodoForm>

const Template: StoryFn<typeof TodoForm> = (args) => (
  <TodoForm {...args} />
)
export const Form = Template.bind({})