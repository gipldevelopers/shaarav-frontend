import HomePage from '../features/home/HomePage.jsx'
import ServicesPage from '../features/services/ServicesPage.jsx'
import ContactPage from '../features/contact/ContactPage.jsx'
import AboutUsPage from '../features/about/AboutUsPage.jsx'
import WholeSpicesPage from '../features/products/WholeSpicesPage.jsx'
import PowderSpicesPage from '../features/products/PowderSpicesPage.jsx'
import TeaCoffeePage from '../features/products/TeaCoffeePage.jsx'

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
    path: '/products/powder-spices',
    label: 'Powder Spices',
    component: PowderSpicesPage,
    hidden: true,
  },
  {
    path: '/products/Tea-Coffee',
    label: 'Tea Coffee',
    component: TeaCoffeePage,
    hidden: true,
  },
  {
    path: '/contact-us',
    label: 'Contact Us',
    component: ContactPage,
  },
]
