import { Outlet } from 'react-router-dom'
import Navbar from '../features/home/components/Navbar.jsx'
import Footer from '../features/home/components/Footer.jsx'
import { routes } from '../app/routes.jsx'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col text-clove-900">
      <Navbar navigation={routes} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer navigation={routes} />
    </div>
  )
}

export default MainLayout
