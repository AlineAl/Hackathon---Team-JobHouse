import { render } from '@redwoodjs/testing/web'

import JobPagePage from './JobPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobPagePage />)
    }).not.toThrow()
  })
})
