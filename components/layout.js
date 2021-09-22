
import { NavTop, NavLogo, NavMenu } from './navbar'
import Footer from './footer'
import Banner from './banner'

export default function Layout({ children }) {
  return (
    <>
      
      <NavTop />
      <NavLogo />
      <NavMenu />
      <Banner />

      <main>{children}</main>

      <Footer />
    </>
  )
}