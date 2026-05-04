import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import { routes } from './routes.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import NotFoundPage from '../features/error/NotFoundPage.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Application Routes with Layout */}
        <Route element={<MainLayout />}>
          {routes.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={<route.component />} 
            />
          ))}
        </Route>

        {/* 404 Route without Layout */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
