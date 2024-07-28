// src/components/MyButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import MyButton from './Button'

describe('MyButton', () => {
  it('should render the button and handle click event', () => {
    const handleClick = vi.fn()
    render(<MyButton onClick={handleClick}>Click me</MyButton>)

    const button = screen.getByText('Click me')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})