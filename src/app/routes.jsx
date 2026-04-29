import HomePage from '../features/home/HomePage.jsx'
import ServicesPage from '../features/services/ServicesPage.jsx'
import ContactPage from '../features/contact/ContactPage.jsx'

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/services',
    label: 'Services',
    component: ServicesPage,
  },
  {
    path: '/contact',
    label: 'Contact',
    component: ContactPage,
  },
]
