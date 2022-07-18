import "./nav-icon.styles.scss";

const NavIcon = ({ title, icon, link, className, onClick }) => {
  return (
    <a href={link} onClick={onClick} className={"navigation-item " + className}>
      {icon}
      <span className="navigation-item-title">{title}</span>
    </a>
  );
};

export default NavIcon;
