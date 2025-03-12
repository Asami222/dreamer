import { Meta, StoryFn } from '@storybook/react'
import Modal from '.'

export default {
  title: 'Organisms/Modal',
  argTypes: {
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
  },
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => (
  <Modal {...args} />
)

export const Modal1 = Template.bind({})
Modal1.args = {
  imageUrl: '/images/bear1.png',
  reward: 'テディベア',
  value: true,
}