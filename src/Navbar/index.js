import './Navbar.css'
const Navbar = ({}) => {
  // modal open and closed state is handled using a checkbox 
  // that has its checked property toggled by this label
  // It's a concession since I think the Paper CSS library is cool 🤷‍♀️
  return (
    <nav className="border fixed split-nav">
      <div className="nav-brand">
        <h3>KOVO CATS</h3>
      </div>
      <div className="nav-brand nav-cart">
        <label className="paper-btn paper-btn--nomargin" htmlFor="modal-2">Cart</label>
      </div>
    </nav>
  )
}

export default Navbar;