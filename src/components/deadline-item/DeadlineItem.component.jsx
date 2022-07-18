import "./DeadlineItem.styles.scss";

const DeadlineItem = (props) => {
  const colors = ["#FFC3A2", "#FFA2C0", "#FFCE73", "#A0D7E7", "#A2FFA6"];
  const random_color = Math.round(Math.random() * colors.length);
  return (
    <div className="deadline-item-container">
      <div className="deadline-item-icon">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="56" height="56" rx="16" fill={colors[random_color]? colors[random_color]: '#FFA2C0'} />
          <path
            d="M27.5 44.9062C18.4424 44.9062 11.0938 37.5576 11.0938 28.5C11.0938 19.4424 18.4424 12.0938 27.5 12.0938C36.5576 12.0938 43.9062 19.4424 43.9062 28.5C43.9062 37.5576 36.5576 44.9062 27.5 44.9062Z"
            fill="white"
          />
          <path
            d="M24.8767 35.4983L18.8354 29.4656L20.7153 27.6284L24.8767 31.824L35.4639 21.2368L37.3438 23.074L24.8767 35.4983Z"
            fill={colors[random_color]? colors[random_color]: '#FFA2C0'}
          />
        </svg>
      </div>
      <div className="deadline-item-text-content">
        <span className="deadline-item-title">{props.module_name}</span>
        <div className="deadline-item-date">
          <span>{props.deadline}</span>
        </div>
      </div>
    </div>
  );
};

export default DeadlineItem;
