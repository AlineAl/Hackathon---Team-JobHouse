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

import LessorsLayout from 'src/layouts/Admin/LessorsLayout'

import LodgingsLayout from 'src/layouts/Admin/LodgingsLayout'

import UsersLayout from 'src/layouts/Admin/UsersLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={JobsLayout}>
        <Route path="/admin/jobs/new" page={AdminJobNewJobPage} name="adminNewJob" />
        <Route path="/admin/jobs/{id:Int}/edit" page={AdminJobEditJobPage} name="adminEditJob" />
        <Route path="/admin/jobs/{id:Int}" page={AdminJobJobPage} name="adminJob" />
        <Route path="/admin/jobs" page={AdminJobJobsPage} name="adminJobs" />
      </Set>
      <Set wrap={LessorsLayout}>
        <Route path="/admin/lessors/new" page={AdminLessorNewLessorPage} name="adminNewLessor" />
        <Route path="/admin/lessors/{id:Int}/edit" page={AdminLessorEditLessorPage} name="adminEditLessor" />
        <Route path="/admin/lessors/{id:Int}" page={AdminLessorLessorPage} name="adminLessor" />
        <Route path="/admin/lessors" page={AdminLessorLessorsPage} name="adminLessors" />
      </Set>
      <Set wrap={LodgingsLayout}>
        <Route path="/admin/lodgings/new" page={AdminLodgingNewLodgingPage} name="adminNewLodging" />
        <Route path="/admin/lodgings/{id:Int}/edit" page={AdminLodgingEditLodgingPage} name="adminEditLodging" />
        <Route path="/admin/lodgings/{id:Int}" page={AdminLodgingLodgingPage} name="adminLodging" />
        <Route path="/admin/lodgings" page={AdminLodgingLodgingsPage} name="adminLodgings" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/admin/users/new" page={AdminUserNewUserPage} name="adminNewUser" />
        <Route path="/admin/users/{id:Int}/edit" page={AdminUserEditUserPage} name="adminEditUser" />
        <Route path="/admin/users/{id:Int}" page={AdminUserUserPage} name="adminUser" />
        <Route path="/admin/users" page={AdminUserUsersPage} name="adminUsers" />
      </Set>
      <Route path="/lodging-description" page={LodgingDescriptionPage} name="lodgingDescription" />
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/job-page" page={JobPagePage} name="jobPage" />
      <Route path="/lodging-page" page={LodgingPagePage} name="lodgingPage" />
      <Route path="/results-page" page={ResultsPagePage} name="resultsPage" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
