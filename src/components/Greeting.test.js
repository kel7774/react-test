import Greeting from './Greeting'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // arrange
    render(<Greeting />)
    // act
    const hellowWorldElement = screen.getByText('Hello World', { exact: false })
    // assert
    expect(hellowWorldElement).toBeInTheDocument()
  })
  test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />)
    const paragraphElement = screen.getByText('good to see you', { exact: false })
    expect(paragraphElement).toBeInTheDocument()
  })
  test('renders changed if the button was clicked', () => {
    render(<Greeting />)
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const outputElement = screen.getByText('Changed!')
    expect(outputElement).toBeInTheDocument()
  })
  test('does not render good to see you if the button was clicked', () => {
    render(<Greeting />)
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const outputElement = screen.queryByText('good to see you!', { exact: false })
    expect(outputElement).toBeNull()
  })
})
