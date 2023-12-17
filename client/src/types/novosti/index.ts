export type NovostType = {
  id: number;
  img: string;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
};

export type NovostiState = {
  novosti: NovostType[];
  selectedNovost: NovostType | null;
  addNovostModalIsOpen: boolean;
};

export type AddNovostFormData = {
  img: string;
  title: string;
  text: string;
};
