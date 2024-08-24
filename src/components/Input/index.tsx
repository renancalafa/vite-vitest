import { Dispatch, FC, SetStateAction } from 'react';
import './index.css';

interface InputProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  placeHolder?: string;
  id: string;
}

const Input: FC<InputProps> = ({
  inputValue,
  setInputValue,
  placeHolder,
  id,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id={id}
      />
    </div>
  );
};

export default Input;
