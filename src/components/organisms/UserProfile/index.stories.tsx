import { Meta, StoryFn } from '@storybook/react'
import UserProfile from '.'

export default {
  title: 'Organisms/UserProfile',
  argTypes: {
    username: {
      control: { type: 'text'},
      description: 'ユーザー名',
      table: {
        type: { summary: 'string' },
      },
    },
    profileImageUrl: {
      control: { type: 'text'},
      description: 'ユーザー画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    numberOfStars: {
      control: { type: 'number'},
      description: 'ユーザーが所有する星の数',
      table: {
        type: { summary: 'number' },
      },
    },
    dream: {
      control: { type: 'text'},
      description: 'ユーザーの説明',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof UserProfile>

const Template: StoryFn<typeof UserProfile> = (args) => (
  <UserProfile {...args} />
)

export const Profile = Template.bind({})
Profile.args = {
  username: 'テストユーザー',
  profileImageUrl: 'images/bear1.png',
  numberOfStars: 100,
  dream: 'サンプルテキスト'
}