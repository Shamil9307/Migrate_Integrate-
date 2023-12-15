
export type CultureType = {
  id: number;
  img: string;
  title: string;
  text: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};

// Redux Slice State
export type CulturesState = {
  cultures: CultureType[];
//   users: UserType[];
//   selectedUser: UserType | null;
//   selectedComment: CommentWithUser | null;
//   favoriteComments: CommentWithUser[];
//   blacklistUsers: UserType[];
//   addCommentModalIsOpen: boolean;
};

export type AddCultureFormData = {
    img: string;
    title: string;
    text: string;
    url: string;
};
