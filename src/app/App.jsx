import MainLayout from '../layouts/MainLayout.jsx'
import { routes } from './routes.jsx'

function App() {
  const activeRoute = routes[0]
  const Page = activeRoute.component

  return (
    <MainLayout>
      <Page />
    </MainLayout>
  )
}

export default App
