import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <NavItem href="/"> DemoLAB </NavItem>
        <NavItem href="/">Archivos STL</NavItem>
        <NavItem href="/">Filamentos</NavItem>
        <NavItem href="/">Impresoras</NavItem>
        <NavItem href="/">Accesorios</NavItem>
        <NavItem href="/">Imprime con nosotros</NavItem>
        {<CartWidget>1</CartWidget>}
      </ul>
    </nav>
  );
}

export default NavBar;