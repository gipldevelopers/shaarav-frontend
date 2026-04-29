import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import { routes } from './routes.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={<route.component />} 
            />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
