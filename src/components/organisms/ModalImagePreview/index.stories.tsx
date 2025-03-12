import { Meta, StoryFn } from '@storybook/react'
import ModalImagePreview from '.'

export default {
  title: 'Organisms/ModalImagePreview',
  argTypes: {
    imageUrl: {
      control: { type: 'text' },
      description: 'ご褒美イメージ',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof ModalImagePreview>

const Template: StoryFn<typeof ModalImagePreview> = (args) => (
  <ModalImagePreview {...args} />
)

export const Modal1 = Template.bind({})
Modal1.args = {
  src: '/images/bear1.png',
  value: true,
}