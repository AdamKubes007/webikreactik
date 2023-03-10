import Ract from "react";

function Header() {
  return (
    <div className="App">
      <header>
        <div className="logo">Čajka Kajka</div>
        <nav>
          <ul className="menu-links">
            <li><a href="Moje projekty">Moje projekty</a></li>
            <li><a href="Kontakty">Kontakt</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;