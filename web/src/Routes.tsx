// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/lodging-detail" page={LodgingDescriptionPage} name="lodgingDescription" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/job-detail" page={JobPagePage} name="jobPage" />
      <Route path="/lodgings" page={LodgingPagePage} name="lodgingPage" />
      <Route path="/jobs" page={ResultsPagePage} name="resultsPage" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
