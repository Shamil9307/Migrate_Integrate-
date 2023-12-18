export type LegalType = {
  id: number;
  img: string;
  title: string;
  text: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};

export type LegalsState = {
  legals: LegalType[];
  selectedLegal: LegalType | null;
  addLegalModalIsOpen: boolean;
};

export type AddLegalFormData = {
  img: string;
  title: string;
  text: string;
  url: string;
};
