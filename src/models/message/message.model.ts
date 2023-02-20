export interface ContentMessage {
  type: UserType,
  message: string
}

type UserType = 'ai' | 'user';
