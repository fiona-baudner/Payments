import { Link } from 'react-router-dom'

function PrototypeCard({ title, description, icon, to, accentColor, accentColorEnd }) {
  const style = {
    '--card-accent': accentColor,
    '--card-accent-end': accentColorEnd || accentColor,
  }

  return (
    <Link to={to} className="prototype-card" style={style}>
      <div className="prototype-card-icon">
        {icon}
      </div>
      <h3 className="prototype-card-title">{title}</h3>
      <p className="prototype-card-description">{description}</p>
      <div className="prototype-card-arrow">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}

export default PrototypeCard
