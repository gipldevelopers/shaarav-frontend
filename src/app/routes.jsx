import HomePage from '../features/home/HomePage.jsx'
import ServicesPage from '../features/services/ServicesPage.jsx'
import ContactPage from '../features/contact/ContactPage.jsx'
import AboutUsPage from '../features/about/AboutUsPage.jsx'
import WholeSpicesPage from '../features/products/WholeSpicesPage.jsx'

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/about-us',
    label: 'About Us',
    component: AboutUsPage,
  },
  {
    path: '/our-product',
    label: 'Our Product',
    component: ServicesPage,
  },
  {
    path: '/products/whole-spices',
    label: 'Whole Spices',
    component: WholeSpicesPage,
    hidden: true,
  },
  {
    path: '/contact-us',
    label: 'Contact Us',
    component: ContactPage,
  },
]
