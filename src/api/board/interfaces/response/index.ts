export interface IBoardSearchSchema {
  postId: number;
  categoryId: number;
  categoryName: string;
  title: string;
  description: string;
  cntComment: number;
  createDate: string;
  author: string;
  profileImage: string | null;
}

export interface ICategorySchema {
  categoryId: number;
  categoryName: string;
}

export interface IAuthorSchema {
  firstName: string;
  lastName: string;
  profileImage?: string | null;
}

export interface IPostDetailsSchema {
  postId: number;
  title: string;
  description: string;
  category: ICategorySchema;
  cntComment: number;
  createDate: string;
  author: IAuthorSchema;
}
