import { render } from '@redwoodjs/testing/web'

import LodgingDescriptionPage from './LodgingDescriptionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LodgingDescriptionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LodgingDescriptionPage />)
    }).not.toThrow()
  })
})
