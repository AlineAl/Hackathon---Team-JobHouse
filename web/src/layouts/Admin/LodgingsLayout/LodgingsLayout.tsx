import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LodgingLayoutProps = {
  children: React.ReactNode
}

const LodgingsLayout = ({ children }: LodgingLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.adminLodgings()}
            className="rw-link"
          >
            Lodgings
          </Link>
        </h1>
        <Link
          to={routes.adminNewLodging()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Lodging
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default LodgingsLayout
