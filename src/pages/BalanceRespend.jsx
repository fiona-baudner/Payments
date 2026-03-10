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

      <div className="subpage-section">
        <h2 className="subpage-section-title">SSN concept test</h2>
        <div className="prototypes-grid">
          <PrototypeCard
            title="Prototype1: Tension build"
            description="SSN verification with instant success confirmation."
            icon="✅"
            to="/balance-respend/ssn-concept-test"
            accentColor="#10b981"
            accentColorEnd="#06b6d4"
          />
          <PrototypeCard
            title="Prototype2: Everything up front"
            description="SSN verification with all info presented upfront."
            icon="📋"
            to="/balance-respend/everything-upfront"
            accentColor="#8b5cf6"
            accentColorEnd="#a855f7"
          />
          <PrototypeCard
            title="Prototype3: Trust lead"
            description="SSN verification with trust-building approach."
            icon="🔒"
            to="/balance-respend/trust-lead"
            accentColor="#f59e0b"
            accentColorEnd="#f97316"
          />
        </div>
      </div>
    </div>
  )
}

export default BalanceRespend
