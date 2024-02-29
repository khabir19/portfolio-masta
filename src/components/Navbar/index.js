import { NavbarContainer, NavbarLinkContainer, Artist } from "./styles";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <Artist to="/">
          masta ariane
        </Artist>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
}

export default Navbar;