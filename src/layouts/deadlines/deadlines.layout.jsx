import "./deadlines.styles.scss";
import DeadlineItem from "../../components/deadline-item/DeadlineItem.component";
import moment from "moment";
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
const Deadlines = () => {
  return (
    <div className="deadlines-container">
      <h4>{moment().format("MMMM Do YYYY, h:mm A")}</h4>
      <h3 className="deadlines-title">Deadlines:</h3>
      {deadlines.map((e, i) => (
        <DeadlineItem
          key={i}
          module_name={e.module_name}
          deadline={e.deadline}
        />
      ))}
    </div>
  );
};

export default Deadlines;
