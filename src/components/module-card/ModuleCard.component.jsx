import "./ModuleCard.styles.scss";

const ModuleCard = (props) => {
  return (
    <div className="module-container">
      <h3 className="module-title">{props.module_name}</h3>
      <p className="module-code">{props.module_code}</p>
      <div className="module-ranking">
        <span><strong>{props.module_progress}</strong></span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${props.module_progress_bar}%` }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
