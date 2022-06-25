import { render } from '@redwoodjs/testing/web'

import ResultsPagePage from './ResultsPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ResultsPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResultsPagePage />)
    }).not.toThrow()
  })
})
