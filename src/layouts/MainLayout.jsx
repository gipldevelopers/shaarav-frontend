import { routes } from '../app/routes.jsx'

function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="brand-kicker">Shaarav Frontend</p>
          <p className="brand-title">Main Layout</p>
        </div>

        <nav className="site-nav" aria-label="Primary">
          {routes.map((route) => (
            <span key={route.path} className="nav-pill">
              {route.label}
            </span>
          ))}
        </nav>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <p>Structured for scalable React development.</p>
      </footer>
    </div>
  )
}

export default MainLayout
