import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total }) {
  const totalRating =
    total !== 0 ? Math.round(((good + neutral) / total) * 100) : 0;
  return (
    <div className={css.feedbackContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive: {totalRating}</p>
    </div>
  );
}

export default Feedback;
