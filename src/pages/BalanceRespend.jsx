import { Link } from 'react-router-dom'
import PrototypeCard from '../components/PrototypeCard'

const subpages = [
  {
    id: 'existing-seller-onboarding',
    title: 'Existing Seller Onboarding',
    description: 'Onboarding flow for existing sellers to set up balance respend.',
    icon: '🏪',
    to: '/balance-respend/existing-seller-onboarding',
    accentColor: '#10b981',
    accentColorEnd: '#06b6d4',
  },
]

function BalanceRespend() {
  return (
    <div className="subpage">
      <div className="subpage-header">
        <Link to="/" className="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Dashboard
        </Link>
        <h1 className="subpage-title">Balance Respend</h1>
        <p className="subpage-subtitle">
          Prototype for balance respending flows
        </p>
      </div>
      <div className="prototypes-grid">
        {subpages.map((subpage) => (
          <PrototypeCard
            key={subpage.id}
            title={subpage.title}
            description={subpage.description}
            icon={subpage.icon}
            to={subpage.to}
            accentColor={subpage.accentColor}
            accentColorEnd={subpage.accentColorEnd}
          />
        ))}
      </div>
    </div>
  )
}

export default BalanceRespend
