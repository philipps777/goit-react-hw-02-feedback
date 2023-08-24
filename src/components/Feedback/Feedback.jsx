export const FeedbackOptions = (
  { onLeaveFeedback },
  { bad, good, neutral }
) => {
  return (
    <>
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => onLeaveFeedback('good')}>Good: {good}</button>
        <button onClick={() => onLeaveFeedback('neutral')}>
          Neutral: {neutral}
        </button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad: {bad}</button>
      </div>
    </>
  );
};
