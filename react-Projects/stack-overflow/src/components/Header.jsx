export default function Header() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#1">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#1">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#1">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#1">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
