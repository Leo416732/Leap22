import { MENUS } from "../../util/data";
import "../../styles/header.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="container">
        {MENUS.map((menu, index) => (
          <li key={index}>
            <a href={menu.url}>{menu.name}</a>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}
