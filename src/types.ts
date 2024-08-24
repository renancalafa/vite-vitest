import { Dispatch, SetStateAction } from 'react';

export interface FormProps {
  list: ListItem[];
  setList: Dispatch<SetStateAction<ListItem[]>>;
  placeHolderInputForm: string;
}

export interface ListItem {
  id: string;
  task: string;
}
