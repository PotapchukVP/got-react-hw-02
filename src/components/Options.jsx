import css from "../components/Options.module.css";

function Options({ onFeedbackButton, totalFeedback, onResetFeedback }) {
  const isTotalFeedback = totalFeedback !== 0;
  return (
    <div className={css.container}>
      <button onClick={() => onFeedbackButton("good")}>Good</button>
      <button onClick={() => onFeedbackButton("neutral")}>Neutral</button>
      <button onClick={() => onFeedbackButton("bad")}>Bad</button>
      <button
        style={{ display: isTotalFeedback ? "block" : "none" }}
        onClick={onResetFeedback}
      >
        Reset
      </button>
    </div>
  );
}

export default Options;
