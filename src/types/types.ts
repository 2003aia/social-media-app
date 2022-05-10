export type TPost = {
  avatar?: string;
  text?: string;
  likes: Array<string>;
  created: string;
  author_name: string;
  image_name?: string;
  image_url?: string;
  user_id: string;
  id: string;
  totalMessages: number;
};

export type TUser = {
  email?: string | undefined;
  name?: string;
  birthDate?: string | undefined;
  avatar?: string;
  created?: string;
  following?: number;
  id?: string;
  followers?: number;
};

export type TComment = {
  created: string;
  message: string;
  likes?: Array<string>;
  dislikes?: Array<string>;
  author_avatar: string;
  author_id: string;
  author_nickname: string;
  id: string;
};
