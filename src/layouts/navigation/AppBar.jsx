import { useState } from "react";
import "./navigation.styles.scss";
import {
  DashboardIcon,
  BookIcon,
  TimeTableIcon,
  LogOutIcon,
  AvatarIcon,
} from "../../assets/icons/icons";
import NavIconMobile from "./NavIconMobile";
function AppBar() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div className="bg-light container-fluid fixed-bottom">
        <div className="row">
          <div className="col">
            <NavIconMobile
              title={"Dashboard"}
              link={"#"}
              icon={<DashboardIcon />}
              className={currentPage === 0 ? "active" : " "}
              onClick={() => setCurrentPage(0)}
            />
          </div>
          <div className="col">
            <NavIconMobile
              title={"Book"}
              link={"#"}
              icon={<BookIcon />}
              className={currentPage === 1 ? "active" : " "}
              onClick={() => setCurrentPage(1)}
            />
          </div>
          <div className="col">
            <NavIconMobile
              title={"Timetable"}
              link={"#"}
              icon={<TimeTableIcon />}
              className={currentPage === 2 ? "active" : " "}
              onClick={() => setCurrentPage(2)}
            />
          </div>
          <div className="col">
            <NavIconMobile
              title={"Log Out"}
              link={"#"}
              icon={<LogOutIcon />}
              className={currentPage === 3 ? "active" : " "}
              onClick={() => setCurrentPage(3)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppBar;
