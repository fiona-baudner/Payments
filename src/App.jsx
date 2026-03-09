import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import BalanceRespend from './pages/BalanceRespend'
import ExistingSellerOnboarding from './pages/ExistingSellerOnboarding'
import SSNConceptTest from './pages/SSNConceptTest'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/balance-respend" element={<BalanceRespend />} />
        <Route path="/balance-respend/existing-seller-onboarding" element={<ExistingSellerOnboarding />} />
        <Route path="/balance-respend/ssn-concept-test" element={<SSNConceptTest />} />
      </Routes>
    </Layout>
  )
}

export default App
