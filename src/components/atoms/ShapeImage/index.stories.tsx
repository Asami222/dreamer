import { Meta, StoryFn } from '@storybook/react'
import ShapeImage from './index'

export default {
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 100,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 100,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof ShapeImage>

const Template: StoryFn<typeof ShapeImage> = (args) => (
  <ShapeImage {...args} />
)

export const Circle = Template.bind({})
Circle.args = { src: '/images/bear1.png', shape: 'circle' , width: 100, height: 100 }

export const Square = Template.bind({})
Square.args = { src: '/images/bear1.png', shape: 'square', width: 100, height: 100 }