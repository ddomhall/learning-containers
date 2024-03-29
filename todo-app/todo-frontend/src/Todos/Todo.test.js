/**
 * @jest-environment jsdom
 */

import Todo from './Todo.jsx'
import { render, screen } from '@testing-library/react'

test('render content', async () => {
  render(<Todo todo={{text: 'test todo'}} />)
  const element = screen.getByText('test todo')
  expect(element).toBeDefined()
})
