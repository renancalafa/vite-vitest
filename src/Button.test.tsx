// src/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1); 
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button text="Click me" onClick={() => {}} disabled />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled(); 
  });

  test('is enabled when disabled prop is false', () => {
    render(<Button text="Click me" onClick={() => {}} disabled={false} />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).not.toBeDisabled(); 
  });

  test('dont call onClick when clicked disabled', () => {
    const handleClick = vi.fn();
    render(<Button text="Click me" onClick={handleClick} disabled/>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled(); 
  });
});
