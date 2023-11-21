import HeaderLinks from "./HeaderLink";
import HeaderLinksMobile from "./HeaderLinksMobile";
import Logo from "./Logo";
import useScreenSize from "use-screen-size";

export default function HeaderLeft() {
  const size = useScreenSize();
  const isMobile = size.width <= 870;

  return (
    <div className={`HeaderLeft ${isMobile && "HeaderLeftMobile"}`}>
      <Logo isShortcut={isMobile} />
      {isMobile ? <HeaderLinksMobile /> : <HeaderLinks />}
    </div>
  );
}
