import css from "../components/Options.module.css";

function Options({ onFeedbackButton, totalFeedback }) {
  const handleButtonClick = (key) => {
    onFeedbackButton(key);
  };

  return (
    <div className={css.container}>
      <button onClick={() => handleButtonClick("good")}>Good</button>
      <button onClick={() => handleButtonClick("neutral")}>Neutral</button>
      <button onClick={() => handleButtonClick("bad")}>Bad</button>
      {totalFeedback && (
        <button onClick={() => handleButtonClick("bad")}>Reset</button>
      )}
    </div>
  );
}

export default Options;
