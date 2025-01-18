import   "../../public/css/header.css";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/"> inicio</a>
          </li>
          <li>
          <a href="/contacto"> contacto</a>
          </li>
          <li>
          <a href="/producto"> producto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
