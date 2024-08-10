import { Dispatch, SetStateAction } from "react";

export interface FormProps {
    list: string[]; 
    setList: Dispatch<SetStateAction<string[]>>;
  }