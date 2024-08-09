import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import './index.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormProps {
  list: string[]; 
  setList: Dispatch<SetStateAction<string[]>>;
}

const Form: FC<FormProps> = ({ list, setList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!inputValue) {
      toast.error("I don't think you're suppose to enter black tasks, you squid....");
      return;
    }
    setList([...list, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input 
          type="text" 
          placeholder="Task"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <button 
          type="submit"
        >
          +
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
