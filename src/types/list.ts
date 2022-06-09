export type ListItemProp = {
  term: string;
  overview: string;
  descriptions?: string[];
  link?: string;
};

export type ListProp = {
  title: string;
  listItems: ListItemProp[];
};
