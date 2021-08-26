
import { NavTop, NavLogo, NavMenu } from './navbar1'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      
      <NavTop />
      <NavLogo />
      <NavMenu />

      <main>{children}</main>

      <Footer />
    </>
  )
}