import css from "./Feedback.module.css";
import { useEffect } from "react";

function Feedback({ onReview, feedback }) {
  const totalFeedback = feedback.totalFeedback;
  const totalRating =
    totalFeedback !== 0
      ? Math.round(((onReview.good + onReview.neutral) / totalFeedback) * 100)
      : 0;
  return (
    <div className={css.feedbackContainer}>
      <p>Good: {onReview.good}</p>
      <p>Neutral: {onReview.neutral}</p>
      <p>Bad: {onReview.bad}</p>
      <p>Total: {feedback.totalFeedback} </p>
      <p>Positive: {totalRating}</p>
    </div>
  );
}

export default Feedback;
