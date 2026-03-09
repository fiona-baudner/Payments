import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import BalanceRespend from './pages/BalanceRespend'
import ExistingSellerOnboarding from './pages/ExistingSellerOnboarding'
import SSNConceptTest from './pages/SSNConceptTest'

function App() {
  return (
    <Routes>
      {/* SSN Concept Test without Layout for clean user testing */}
      <Route path="/balance-respend/ssn-concept-test" element={<SSNConceptTest />} />
      
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
