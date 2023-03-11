import "../style/header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container header-navbar">
          <div>
            <a className="a navbar-brand" href="#1">
              <img className="header-img" src="./Leap.png" alt="" />
              <img className="hire-img" src="./Hire Me.png" alt="" />
            </a>
          </div>
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
            <ul className="navbar-nav ul">
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#1">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  STORE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  FREELANCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
