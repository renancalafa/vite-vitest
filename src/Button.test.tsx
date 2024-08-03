import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  it('should call onClick when button is clicked', async () => {
    const user = userEvent.setup();

    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    await user.click(buttonElement);
    expect(buttonElement).toBeEnabled();
    expect(handleClick).toHaveBeenCalledTimes(1); 
  });


  it('should not call onClick when disabled prop is passed', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Click me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    await user.click(buttonElement);
    expect(buttonElement).toBeDisabled();
    expect(handleClick).not.toHaveBeenCalled(); 
  });
});
