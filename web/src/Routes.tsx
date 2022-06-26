// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import JobsLayout from 'src/layouts/Admin/JobsLayout'
import LodgingsLayout from 'src/layouts/Admin/LodgingsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={LodgingsLayout}>
        <Route path="/admin/lodgings/new" page={AdminLodgingNewLodgingPage} name="adminNewLodging" />
        <Route path="/admin/lodgings/{id:Int}/edit" page={AdminLodgingEditLodgingPage} name="adminEditLodging" />
        <Route path="/admin/lodgings/{id:Int}" page={AdminLodgingLodgingPage} name="adminLodging" />
        <Route path="/admin/lodgings" page={AdminLodgingLodgingsPage} name="adminLodgings" />
      </Set>
      <Set wrap={JobsLayout}>
        <Route path="/admin/jobs/new" page={AdminJobNewJobPage} name="adminNewJob" />
        <Route path="/admin/jobs/{id:Int}/edit" page={AdminJobEditJobPage} name="adminEditJob" />
        <Route path="/admin/jobs/{id:Int}" page={AdminJobJobPage} name="adminJob" />
        <Route path="/admin/jobs" page={AdminJobJobsPage} name="adminJobs" />
      </Set>
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
