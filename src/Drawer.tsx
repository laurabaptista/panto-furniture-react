type DrawerTypes = {
  onClose: () => void;
};

const Drawer = ({ onClose }: DrawerTypes) => (
  <>
    <div className="drawer-overlay open" onClick={onClose}></div>
    <div className="drawer open">
      <button className="drawer-close" onClick={onClose}>
        ✕
      </button>
      <ul>
        <li>
          <a href="#">Furniture</a>
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
    </div>
  </>
);

export default Drawer;
