
import { NavTop, NavLogo, NavMenu } from './navbar'
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