import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import BalanceRespend from './pages/BalanceRespend'
import ExistingSellerOnboarding from './pages/ExistingSellerOnboarding'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/balance-respend" element={<BalanceRespend />} />
        <Route path="/balance-respend/existing-seller-onboarding" element={<ExistingSellerOnboarding />} />
      </Routes>
    </Layout>
  )
}

export default App
