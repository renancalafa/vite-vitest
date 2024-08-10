import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './components/List';

describe('List Component', () => {

it('should render list items correctly', () => {
    const mockSetList = vi.fn();
    const mockList = ['Task 1', 'Task 2', 'Task 3'];

    render(<List list={mockList} setList={mockSetList} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent('Task 1');
    expect(listItems[1]).toHaveTextContent('Task 2');
    expect(listItems[2]).toHaveTextContent('Task 3');
  });

  it('should delete an item from the list when "X" button is clicked', async () => {
    const user = userEvent.setup();
    const mockSetList = vi.fn();
    const mockList = ['Task 1', 'Task 2', 'Task 3'];

    render(<List list={mockList} setList={mockSetList} />);

    const deleteButtons = screen.getAllByRole('button', { name: /x/i });
    await user.click(deleteButtons[1]);

    expect(mockSetList).toHaveBeenCalledWith(['Task 1', 'Task 3']);
  });

  it('should delete an item from the list when "X" button is clicked', async () => {
    const user = userEvent.setup();
    const mockSetList = vi.fn();
    const mockList = ['Task 1', 'Task 2', 'Task 3'];

    render(<List list={mockList} setList={mockSetList} />);

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[1]).not.toBeChecked();

    await user.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();

  });


});