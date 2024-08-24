import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';

describe('Application integration test', () => {
  it('should render the application correctly and interact with components', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByPlaceholderText(/Enter your task here/i);
    const submitButton = screen.getByText('+');

    await user.type(input, 'New Task 1');
    await user.click(submitButton);

    expect(input).toHaveValue('');

    await user.type(input, 'New Task 2');
    await user.click(submitButton);
    await user.type(input, 'New Task 3');
    await user.click(submitButton);

    expect(screen.getByText('New Task 1')).toBeInTheDocument();
    expect(screen.getByText('New Task 2')).toBeInTheDocument();
    expect(screen.getByText('New Task 3')).toBeInTheDocument();

    const deleteButtons = screen.getAllByRole('button', { name: /x/i });

    await user.click(deleteButtons[1]);

    // expect(screen.getByText('New Task 2')).toBeInTheDocument();
  });
});
