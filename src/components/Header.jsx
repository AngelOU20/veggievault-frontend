import { useState } from 'react';
import { DesktopNav } from './Navbar/DesktopNav';
import { MobileNav } from './Navbar/MobileNav';
import logo from '/logo.svg';

export const Header = () => {
  const [hideLeft, setHideLeft] = useState('-left-[1000px]');
  const menuItems = ['recipes', 'resources', 'about', 'contact'];

  const onOpen = () => {
    setHideLeft('left-0');
  };

  const onClose = () => {
    setHideLeft('-left-[1000px]');
  };

  return (
    <header className="bg-primary">
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} logo={logo} />
      </div>

      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          logo={logo}
          onOpen={onOpen}
          onClose={onClose}
          hideLeft={hideLeft}
        />
      </div>
    </header>
  );
};
