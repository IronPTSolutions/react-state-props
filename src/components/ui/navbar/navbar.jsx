import logo from '../../../assets/react.svg';

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="30" height="24" />
          React State & Props
        </a>
      </div>
    </nav>
  )
}

export default Navbar;