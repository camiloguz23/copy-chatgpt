export interface ContentMessage {
  type: UserType;
  message: string;
  last?: boolean;
}

type UserType = 'ai' | 'user';
