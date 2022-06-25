import { render } from '@redwoodjs/testing/web'

import LodgingPagePage from './LodgingPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LodgingPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LodgingPagePage />)
    }).not.toThrow()
  })
})
