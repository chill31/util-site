import Menu  from '../components/Menu'
import Footer  from '../components/Footer'

export default function Layout({children}) {
  return (
    <>
        <Menu/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}