import ButtonLogout from "./ButtonLogout";
import Logo from "./Logo";

const Header = () => {
  return (
    <section className="flex items-center justify-between py-2 btmBorder">
      <Logo />
      <ButtonLogout />
    </section>
  );
};

export default Header;
