import PrototypeCard from '../components/PrototypeCard'

const prototypes = [
  {
    id: 'balance-respend',
    title: 'Balance Respend',
    description: 'Explore balance respending flows and user interactions for managing payment funds.',
    icon: '💰',
    to: '/balance-respend',
    accentColor: '#6366f1',
    accentColorEnd: '#8b5cf6',
  },
]

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Prototypes</h1>
        <p className="dashboard-subtitle">
          Explore payment flow prototypes and experiments
        </p>
      </div>
      <div className="prototypes-grid">
        {prototypes.map((prototype) => (
          <PrototypeCard
            key={prototype.id}
            title={prototype.title}
            description={prototype.description}
            icon={prototype.icon}
            to={prototype.to}
            accentColor={prototype.accentColor}
            accentColorEnd={prototype.accentColorEnd}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
