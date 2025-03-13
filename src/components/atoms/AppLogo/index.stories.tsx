import { Meta, StoryObj } from '@storybook/react'
import AppLogo from '.'

export default {
  title: 'Atoms/AppLogo'
} as Meta<typeof AppLogo>

type Story = StoryObj<typeof AppLogo>

export const Base: Story = {
  render: () => <AppLogo width="80px"/>
}
