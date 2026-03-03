import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">P</div>
            <span className="logo-text">Payments</span>
          </Link>
        </div>
      </header>
      <main className="main">
        {children}
      </main>
    </div>
  )
}

export default Layout
