import "./nav-icon.styles.scss";

const NavIconMobile = ({ title, icon, link, className, onClick }) => {
  return (
    <a href={link} onClick={onClick} className={"navigation-item " + className}>
      {icon}
      {/* <span className="navigation-item-title">{title}</span> */}
    </a>
  );
};

export default NavIconMobile;
