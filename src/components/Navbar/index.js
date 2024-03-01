import { NavbarContainer, NavbarLinkContainer, Artist } from "./styles";

import ContactBar from "../UniDrawer";

function Navbar() {
  return (
    <NavbarContainer>
      <ContactBar/>
      <NavbarLinkContainer>
        <Artist to="/">
          masta ariane
        </Artist>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
}

export default Navbar;