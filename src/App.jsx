import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import BalanceRespend from './pages/BalanceRespend'
import ExistingSellerOnboarding from './pages/ExistingSellerOnboarding'
import SSNConceptTest from './pages/SSNConceptTest'
import EverythingUpfront from './pages/EverythingUpfront'
import TrustLead from './pages/TrustLead'

function App() {
  return (
    <Routes>
      {/* Prototype pages without Layout for clean user testing */}
      <Route path="/balance-respend/ssn-concept-test" element={<SSNConceptTest />} />
      <Route path="/balance-respend/everything-upfront" element={<EverythingUpfront />} />
      <Route path="/balance-respend/trust-lead" element={<TrustLead />} />
      
      {/* All other routes with Layout */}
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/balance-respend" element={<BalanceRespend />} />
            <Route path="/balance-respend/existing-seller-onboarding" element={<ExistingSellerOnboarding />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  )
}

export default App
