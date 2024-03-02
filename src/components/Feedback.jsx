import css from "./Feedback.module.css";

function Feedback({ option, feedback }) {
  const totalFeedback = feedback.totalFeedback;
  const totalRating =
    totalFeedback !== 0
      ? Math.round(((option.good + option.neutral) / totalFeedback) * 100)
      : 0;
  return (
    <div className={css.feedbackContainer}>
      <p>Good: {option.good}</p>
      <p>Neutral: {option.neutral}</p>
      <p>Bad: {option.bad}</p>
      <p>Total: {feedback.totalFeedback} </p>
      <p>Positive: {totalRating}</p>
    </div>
  );
}

export default Feedback;
