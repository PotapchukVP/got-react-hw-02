import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../src/components/Description.jsx";
import Options from "../src/components/Options.jsx";
import Feedback from "../src/components/Feedback.jsx";
import Notification from "../src/components/Notification.jsx";

function App() {
  /*
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
  */
  const [good, setGood] = useState(() => {
    const savedGood = JSON.parse(window.localStorage.getItem("good"));
    if (savedGood) return savedGood;
    return 0;
  });
  const [neutral, setNeutral] = useState(() => {
    const savedNeutral = JSON.parse(window.localStorage.getItem("neutral"));
    if (savedNeutral) return savedNeutral;
    return 0;
  });
  const [bad, setBad] = useState(() => {
    const savedBad = JSON.parse(window.localStorage.getItem("bad"));
    if (savedBad) return savedBad;
    return 0;
  });
  const [total, setTotal] = useState(() => {
    const savedTotal = JSON.parse(window.localStorage.getItem("total"));
    if (savedTotal) return savedTotal;
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("good", good);
    window.localStorage.setItem("neutral", neutral);
    window.localStorage.setItem("bad", bad);
    window.localStorage.setItem("total", total);
  }, [good, neutral, bad, total]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setGood(good + 1);
    } else if (feedbackType === "neutral") {
      setNeutral(neutral + 1);
    } else if (feedbackType === "bad") {
      setBad(bad + 1);
    }
    setTotal(total + 1);
    /*
    console.log("Type of feedback: ", feedbackType);
    setOption({
      ...option,
      [feedbackType]: option[feedbackType] + 1,
    });

    setFeedback({
      ...feedback,

      totalFeedback:
        option.good + option.neutral + option.bad + option[feedbackType] + 1,
      totalRating: Math.round(
        ((option.good + option.neutral) / feedback.totalFeedback) * 100
      ),
    });
    */
  };

  /*
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
  */
  const resetTotalFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    setTotal(0);
  };

  return (
    <div className={css.appContainer}>
      <Description />
      <Options
        onFeedbackButton={updateFeedback}
        totalFeedback={total}
        onResetFeedback={resetTotalFeedback}
      />
      {total ? (
        // <Feedback option={option} feedback={feedback} />
        <Feedback good={good} neutral={neutral} bad={bad} total={total} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
