import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <div className={css.feedbackContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive: {positiveFeedback}</p>
    </div>
  );
}

export default Feedback;
