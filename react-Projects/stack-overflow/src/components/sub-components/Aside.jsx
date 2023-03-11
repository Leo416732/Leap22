import "./sub-style/aside.css"
export default function Aside() {
  return (
    <div className="aside">
      <ul
        className="mt-2"
        style={{
          width: "170px",
          height: "80vh",
          position: "sticky",
          top: "50px",
        }}
      >
        <li>
          <a href="#1" style={{ textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#2" style={{ textDecoration: "none" }}>
            PUBLIC
          </a>
          <ul>
            <li><a href="">Question</a></li>
            <li><a href="">Tags</a></li>
            <li><a href="">Users</a></li>
            <li><a href="">Companies</a></li>
          </ul>
        </li>
        <li>
          <a href="#3" style={{ textDecoration: "none" }}>
            COLLECTIVES
          </a>
        </li>
      </ul>
    </div>
  );
}
