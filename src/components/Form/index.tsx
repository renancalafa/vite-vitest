import { FC, FormEvent, memo, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormProps } from '../../types';
import { v4 as uuid } from 'uuid';
import Input from '../Input';
import './index.css';

const Form: FC<FormProps> = ({ list, setList, placeHolderInputForm }) => {
  const [inputValue, setInputValue] = useState('');
  const inputId = 'task-input';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      toast.error(
        "I don't think you're supposed to enter blank tasks, you squid...."
      );
      return;
    }
    setList([...list, { task: inputValue, id: uuid() }]);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor={inputId}>Task:</label>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeHolder={placeHolderInputForm}
          id={inputId}
        />
        <button type="submit">+</button>
      </form>
      <ToastContainer />
    </>
  );
};

//export default memo(Form);
export default memo(Form);
