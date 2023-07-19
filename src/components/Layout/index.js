// Write your code here
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import Body from '../Body'

const Layout = () => (
  <div className="layout-container">
    <Header />
    <div className="layout-body-container">
      <Body />
    </div>
    <Footer />
  </div>
)
export default Layout
