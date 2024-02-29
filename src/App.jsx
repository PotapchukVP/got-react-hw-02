import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../src/components/Description.jsx";
import Options from "../src/components/Options.jsx";
import Feedback from "../src/components/Feedback.jsx";
import Notification from "../src/components/Notification.jsx";

function App() {
  const [feedback, setFeedback] = useState({
    totalFeedback: 0,
    totalRating: 0,
  });

  const [option, setOption] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    console.log("Type of feedback: ", feedbackType);
    setOption((prevOption) => ({
      ...prevOption,
      [feedbackType]: option[feedbackType] + 1,
    }));

    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      totalFeedback: option.good + option.neutral + option.bad + 1,
      totalRating: Math.round(
        ((option.good + option.neutral) / feedback.totalFeedback) * 100
      ),
    }));
  };

  return (
    <div className={css.appContainer}>
      <Description />
      <Options onFeedbackButton={updateFeedback} totalFeedback={feedback} />
      {feedback.totalFeedback ? (
        <Feedback onReview={option} feedback={feedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
