import css from "../components/Description.module.css";
function Description() {
  return (
    <div className={css.body}>
      <h1 className={css.headDescription}>Sip Happens Café</h1>
      <p className={css.plainDescription}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}

export default Description;
