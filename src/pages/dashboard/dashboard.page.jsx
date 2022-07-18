import "./dashboard.styles.scss";
import Navigation from "../../layouts/navigation/navigation.layout";
import MyModules from "../../layouts/my_modules/MyModules.layout";
import Deadlines from "../../layouts/deadlines/deadlines.layout";
import moment from "moment";
import ModuleCarousel from "../../components/ModuleCarousel";
import ModuleCard from "../../components/module-card/ModuleCard.component";
import AppBar from "../../layouts/navigation/AppBar";
import { Link } from "react-router-dom";
const deadlines = [
  {
    module_name: "Fundamentals of Programming",
    deadline: moment().add(1, "days").calendar(),
  },
  {
    module_name: "Web Technology",
    deadline: moment().add(10, "days").calendar(),
  },
  {
    module_name: "AI Fundamentals",
    deadline: moment().add(10, "days").calendar(),
  },
  {
    module_name: "Mathematics for Software Engineering",
    deadline: moment().add(5, "days").calendar(),
  },
  {
    module_name: "Computer Science",
    deadline: moment().add(8, "days").calendar(),
  },
];

const modules = [
  {
    module_name: "Fundamentals of Programming",
    module_code: "****",
    module_progress: Math.round(Math.random() * 100),
    module_progress_bar: Math.round(Math.random() * 100),
  },
  {
    module_name: "Web Technology",
    module_code: "***",
    module_progress: Math.round(Math.random() * 100),
    module_progress_bar: Math.round(Math.random() * 100),
  },
  {
    module_name: "AI Fundamentals",
    module_code: "***",
    module_progress: Math.round(Math.random() * 100),
    module_progress_bar: Math.round(Math.random() * 100),
  },
  {
    module_name: "Mathematics for Software Engineering",
    module_code: "***",
    module_progress: Math.round(Math.random() * 100),
    module_progress_bar: Math.round(Math.random() * 100),
  },
  {
    module_name: "Computer Science",
    module_code: "***",
    module_progress: Math.round(Math.random() * 100),
    module_progress_bar: Math.round(Math.random() * 100),
  },
];
const Dashboard = () => {
  return (
    <>
      <ModuleCarousel deadlines={deadlines} />
      <div className="container module_carousel">
        <h5 className="mymodules-title fs-5 mt-0">Hi Abdulboriy,</h5>
        <p className="mymodules-question fs-3">What will you learn today?</p>
        <br />
        <div className="row mobile_module_container">
          {modules.map((e, i) => (
            <Link to={`/${e.module_name + e.module_code}`} key={i}>
              <div className="col-sm-1 col-xl-6 col-md-6">
                <ModuleCard
                  module_name={e.module_name}
                  module_code={e.module_code}
                  module_progress={e.module_progress}
                  module_progress_bar={e.module_progress_bar}
                />
                <br />
              </div>
            </Link>
          ))}
        </div>
        <AppBar />
      </div>
      <div
        className="display_none"
        style={{
          height: "100vh",
        }}
      >
        <div className="row h-100">
          <div className="col-sm-1 col">
            <Navigation />
          </div>
          <div className="col-sm-11">
            <div className="row ">
              <div className="col-lg-8 col-md-1 col-sm-1 h-100">
                <MyModules />
              </div>
              <div className="col-lg-4 col-md-1 col-sm-1 h-100">
                <Deadlines />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
