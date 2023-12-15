import type { UserType } from '../auth';

export type RecomType = {
  id: number;
  title: string;
  text: string;
  info: number;
  img: string;
};

export type RecWithUser = RecomType & { User?: UserType };

// Redux Slice State
export type CommentsState = {
  rocomendation: RecWithUser[];
  selectedRes: RecWithUser | null;
  addResModalIsOpen: boolean;
  allUser: UserType[];
};

export type AddCommentFormData = {
  title: string;
  text: string;
  img: string;
};
