
export type User = {
  id: number
  username: string
  displayName: string
  password: string
  profileImageUrl: string
  dream: string
  limit: string
  numberOfStars: number
  createdAt: string
}

export type OptionalUser = 'displayName' | 'profileImageUrl' | 'dream' | 'limit' | 'id'

export type NewUser = Omit<User, OptionalUser>

export type Category = 'all' | 'year' | 'month' | 'week' | 'day' | 'time'

export type Category2 =  'year' | 'month' | 'week' | 'day' | 'time'


export type Todo = {
  id: number
  todo: string
  category: Category
  limit?: number[]
  detail?: string
  description?: string
  imageUrl?: string
  blurDataUrl?: string
  starNum?: number
  owner: Pick<User, "id" | "username">
}

export type Reward = {
  id: number
  name: string
  starPieces: number
  imageUrl: string
  owner: Pick<User, "id" | "username">
}

export type GotReward = {
  id: number
  name: string
  starPieces: number
  time: string
  owner: Pick<User, "id" | "username">
}

export type TotalStar = {
  num: number
  owner: User
}

export type ApiContext = {
  apiRootUrl: string
}
