import { FaBars } from "react-icons/fa";
import headerLinks from "../data/headerLinks";
import HeaderLinkMobile from "./HeaderLinkMobile";
import Button from "./Button";
import { useState } from "react";

export default function HeaderLinksMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    document.querySelector("body").style.overflow = isOpen
      ? "initial"
      : "hidden";
    setIsOpen(!isOpen);
  };

  return (
    <div className="HeaderLinksMobile">
      <button
        className="HeaderLinksMobileMenuButton"
        onClick={handleMenuButtonClick}
      >
        <FaBars />
      </button>
      {isOpen && (
        <div className="HeaderSidebar">
          <div className="HeaderSidebarLinks">
            {headerLinks.map((headerLink) => (
              <HeaderLinkMobile text={headerLink.text} href={headerLink.href} />
            ))}
          </div>
          <div className="HeaderSidebarBottom">
            <Button text="Login" type="primary" />
            <Button text="Sign Up" />
          </div>
        </div>
      )}
    </div>
  );
}
