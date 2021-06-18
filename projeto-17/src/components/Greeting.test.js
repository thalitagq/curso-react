import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event' 
import Greeting from './Greeting'

describe('Greeting component', ()=>{
  test('renders Hello as a text', ()=>{
    //ARRANGE
    render(<Greeting/>)
  
    //ACT

  
    //ASSERT
    const helloElement = screen.getByText('Hello')
    expect(helloElement).toBeInTheDocument()
  })

  test('renders "it\'s good to see you" if the button was not clicked', ()=>{
    //ARRANGE 
    render(<Greeting/>)

    //ACT


    //ASSERT
    const paragraph = screen.getByText('it\'s good to see you', {exact: false})
    expect(paragraph).toBeInTheDocument()
  })

  test('renders "changed" if the button was clicked', () => {
    //ARRANGE
    render(<Greeting/>)

    //ACT
    const button = screen.getByRole('button') 
    userEvent.click(button)

    //ASSERT
    const paragraph = screen.getByText('changed',{exact: false})
    expect(paragraph).toBeInTheDocument()
  })

  test('does\'t render "it\'s good to see you" when button was clicked',() => {
    render(<Greeting/>)

    const button = screen.getByRole('button') 
    userEvent.click(button)

    const paragraph = screen.queryByText('it\'s good to see you', {exact: false})
    expect(paragraph).toBeNull();
  })
})