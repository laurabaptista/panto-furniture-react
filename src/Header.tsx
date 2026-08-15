import { useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header>
      <Navbar onMenuClick={() => setIsDrawerOpen(true)} />
      {isDrawerOpen && <Drawer onClose={() => setIsDrawerOpen(false)} />}
    </header>
  );
}

export default Header;
