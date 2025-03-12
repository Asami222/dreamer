import { Meta, StoryFn } from '@storybook/react'
import Button1 from '.'

export default {
  title: 'Atoms/Button1',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      // docsに表示する内容を設定
      description: 'ボタンバリアント',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: 'ボタンテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabledフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      description: 'ボタンの横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'ボタンの縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof Button1>

const Template: StoryFn<typeof Button1> = (args) => <Button1 {...args} />

// Primaryボタン
export const Primary = Template.bind({})
Primary.args = { $variant: 'primary', children: 'Primary Button', selectColor: 'Orange' }

// Secondaryボタン
export const Secondary = Template.bind({})
Secondary.args = { $variant: 'secondary', children: 'Secondary Button', selectColor: 'Pink' }

// Disabledボタン
export const Disabled = Template.bind({})
Disabled.args = { disabled: true, children: 'Disabled Button' }
