import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../src/components/Description.jsx";
import Options from "../src/components/Options.jsx";
import Feedback from "../src/components/Feedback.jsx";
import Notification from "../src/components/Notification.jsx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(window.localStorage.getItem("feedback"));
    if (savedFeedback != null) {
      console.log(savedFeedback);
      return savedFeedback;
    }
    return {
      totalFeedback: 0,
      totalRating: 0,
    };
  });

  const [option, setOption] = useState(() => {
    const savedOptions = JSON.parse(window.localStorage.getItem("option"));
    if (savedOptions != null) {
      console.log(savedOptions);
      return savedOptions;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("option", JSON.stringify(option));
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [option, feedback]);

  useEffect(() => {
    const savedOptions = JSON.parse(window.localStorage.getItem("option"));
    const savedFeedback = JSON.parse(window.localStorage.getItem("feedback"));
    if (savedOptions && savedFeedback) {
      setOption(savedOptions);
      setFeedback(savedFeedback);
      console.log("Mount option: ", savedOptions);
    }
  }, []);

  const updateFeedback = (feedbackType) => {
    console.log("Type of feedback: ", feedbackType);
    setOption({
      ...option,
      [feedbackType]: option[feedbackType] + 1,
    });

    setFeedback({
      ...feedback,
      totalFeedback: option.good + option.neutral + option.bad + 1,
      totalRating: Math.round(
        ((option.good + option.neutral) / feedback.totalFeedback) * 100
      ),
    });
  };

  const resetTotalFeedback = () => {
    setFeedback({
      totalFeedback: 0,
      totalRating: 0,
    });

    setOption({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.appContainer}>
      <Description />
      <Options
        onFeedbackButton={updateFeedback}
        totalFeedback={feedback.totalFeedback}
        onResetFeedback={resetTotalFeedback}
      />
      {feedback.totalFeedback ? (
        <Feedback option={option} feedback={feedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
