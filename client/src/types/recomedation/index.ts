import type { UserType } from '../auth';

export type RecomType = {
  id: number;
  title: string;
  text: string;
  info: number;
  img:string
  
};

export type CommentWithUser = RecomType & { User: UserType };

// Redux Slice State
export type CommentsState = {
  rocomendation: CommentWithUser[];
};

export type AddCommentFormData = {
  title: string;
  body: string;
};
