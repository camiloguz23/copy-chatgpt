export interface ContentMessage {
  type: UserType;
  message: string;
  last?: boolean;
  loading?: boolean;
}

type UserType = 'ai' | 'user';
