import { Dispatch, FC, SetStateAction } from 'react';
import './index.css';

interface ListProps {
  list: string[]; 
  setList: Dispatch<SetStateAction<string[]>>;
}

const List: FC<ListProps> = ({ list, setList }) => {

  const handleDeletion = (index:number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div>
      {(list.length > 0 && <ul>
        {list.map((item, index) => (
          <li key={index}>
            <input type="checkbox" name="done" />
            <label htmlFor={`checkbox-${index}`}>{item}</label>
            <button onClick={()=>handleDeletion(index)}>X</button>
            </li>
        ))}
      </ul>) || (<p>There's nothing to do, Padawan... </p>)}

    </div>
  );
};

export default List;
