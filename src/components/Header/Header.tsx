import Ract from "react";
import { HeaderLogo, HeaderStyle, MenuLinks, MenuLinksLi } from "./Header.styled";

function Header() {
  return (
    <div className="App">
      <HeaderStyle>
        <HeaderLogo>Čajka Kajka</HeaderLogo>
        <nav>
          <MenuLinks>
            <MenuLinksLi><a href="Moje projekty">Moje projekty</a></MenuLinksLi>
            <MenuLinksLi><a href="Kontakty">Kontakt</a></MenuLinksLi>
          </MenuLinks>
        </nav>
      </HeaderStyle>
    </div>
  );
}
export default Header;