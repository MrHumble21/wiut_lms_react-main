import { useState } from "react";
import "./navigation.styles.scss";
import NavIcon from "../../components/nav-icon/nav-icon.component";
import {
  DashboardIcon,
  BookIcon,
  TimeTableIcon,
  LogOutIcon,
  AvatarIcon,
} from "../../assets/icons/icons";

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <nav className="navigation">
      <div className="navigation-top">
        <NavIcon
          title={"Dashboard"}
          link={"#"}
          icon={<DashboardIcon />}
          className={currentPage === 0 ? "active" : " "}
          onClick={() => setCurrentPage(0)}
        />
        <NavIcon
          title={"Book"}
          link={"#"}
          icon={<BookIcon />}
          className={currentPage === 1 ? "active" : " "}
          onClick={() => setCurrentPage(1)}
        />
        <NavIcon
          title={"Timetable"}
          link={"#"}
          icon={<TimeTableIcon />}
          className={currentPage === 2 ? "active" : " "}
          onClick={() => setCurrentPage(2)}
        />
        <NavIcon
          title={"Log Out"}
          link={"#"}
          icon={<LogOutIcon />}
          className={currentPage === 3 ? "active" : " "}
          onClick={() => setCurrentPage(3)}
        />
      </div>
      <div className="navigation-bottom">
        <NavIcon
          title={"Your Profile"}
          link={"#"}
          icon={<AvatarIcon />}
          className={currentPage === 4 ? "active" : " "}
          onClick={() => setCurrentPage(4)}
        />
      </div>
    </nav>
  );
};

export default Navigation;
