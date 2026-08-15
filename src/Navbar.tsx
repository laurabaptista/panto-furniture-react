type NavbarTypes = {
  onMenuClick: () => void;
};

const Navbar = ({ onMenuClick }: NavbarTypes) => (
  <nav>
    <a href="#" className="logo">
      Panto
    </a>
    <ul className="nav-links">
      <li>
        <a href="#">
          Furniture <img src="/icons/dropdown.svg" alt="dropdown-menu" />
        </a>
      </li>
      <li>
        <a href="#">Shop</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    <div className="nav-right">
      <a href="#" className="cart">
        <img src="/icons/cart.svg" alt="Cart icon" className="cart-icon" />
        <span className="cart-count">0</span>
      </a>
      <button className="hamburger" aria-label="Menu" onClick={onMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
);

export default Navbar;
