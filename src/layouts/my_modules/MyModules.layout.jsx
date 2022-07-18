import "./MyModules.styles.scss";
import ModuleCard from "../../components/module-card/ModuleCard.component";

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
const MyModules = () => {
  const name = "Abbosbek";
  return (
    <div className="mymodules-container">
      <h5 className="mymodules-title">Hi {name},</h5>
      <p className="mymodules-question">What will you learn today?</p>
      <div className="modules-container">
        {modules.map((e, i) => (
          <ModuleCard
            key={i}
            module_name={e.module_name}
            module_code={e.module_code}
            module_progress='10/8'
            module_progress_bar={e.module_progress_bar}
          />
        ))}
      </div>
    </div>
  );
};

export default MyModules;
