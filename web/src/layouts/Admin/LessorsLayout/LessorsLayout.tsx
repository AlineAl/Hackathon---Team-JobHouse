import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LessorLayoutProps = {
  children: React.ReactNode
}

const LessorsLayout = ({ children }: LessorLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.adminLessors()}
            className="rw-link"
          >
            Lessors
          </Link>
        </h1>
        <Link
          to={routes.adminNewLessor()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Lessor
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default LessorsLayout
