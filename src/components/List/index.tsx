import { Dispatch, FC, SetStateAction } from 'react';
import './index.css';

interface ListItem {
  id: string;
  task: string;
}
interface ListProps {
  list: ListItem[];
  setList: Dispatch<SetStateAction<ListItem[]>>;
}

const List: FC<ListProps> = ({ list, setList }) => {
  const handleDeletion = (idListItem: string) => {
    const newList = list.filter(({ id }) => id !== idListItem);
    setList(newList);
  };

  return (
    <div>
      {(list.length > 0 && (
        <ul>
          {list.map(({ id, task }) => (
            <li key={id}>
              <input type="checkbox" name="done" />
              <label htmlFor={`checkbox-${id}`}>{task}</label>
              <button onClick={() => handleDeletion(id)}>X</button>
            </li>
          ))}
        </ul>
      )) || <p>There&apos;s nothing to do, Padawan...</p>}
    </div>
  );
};

export default List;
