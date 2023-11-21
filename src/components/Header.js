import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import useScreenSize from "use-screen-size";

export default function Header() {
  const size = useScreenSize();
  const isMobile = size.width <= 870;

  return (
    <div className="Header">
      <HeaderLeft />
      {!isMobile && <HeaderRight />}
    </div>
  );
}
