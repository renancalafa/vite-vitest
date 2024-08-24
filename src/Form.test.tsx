import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Form from './components/Form';

describe('Form Component', () => {
  it('should add task to the list when submitted with a valid input, clearing it', async () => {
    const user = userEvent.setup();

    const mockSetList = vi.fn();
    render(
      <Form list={[]} setList={mockSetList} placeHolderInputForm="Task" />
    );

    const inputElement = screen.getByPlaceholderText(/Task/i);
    const submitButton = screen.getByRole('button', { name: /\+/i });

    await user.type(inputElement, 'New Task');
    await user.click(submitButton);

    expect(mockSetList).toHaveBeenCalledTimes(1);
    expect(mockSetList).toHaveBeenCalledWith([
      expect.objectContaining({
        task: 'New Task',
        id: expect.any(String),
      }),
    ]);
    expect(inputElement).toHaveValue('');
  });

  it('should not add task to the list when submitted with an empty input', async () => {
    const user = userEvent.setup();
    const mockSetList = vi.fn();

    render(
      <Form list={[]} setList={mockSetList} placeHolderInputForm="Task" />
    );

    const submitButton = screen.getByRole('button', { name: /\+/i });
    await user.click(submitButton);

    expect(mockSetList).not.toHaveBeenCalled();
    expect(screen.getByText(/i don't think/i)).toBeInTheDocument();
  });
});
