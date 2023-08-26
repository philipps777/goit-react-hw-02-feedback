import { Button, Div } from './Feedback.styled';

export const FeedbackOptions = (
  { onLeaveFeedback },
  { bad, good, neutral }
) => {
  return (
    <>
      <div>
        <h1>Please leave feedback</h1>
        <Div>
          <Button onClick={() => onLeaveFeedback('good')}>Good {good}</Button>
          <Button onClick={() => onLeaveFeedback('neutral')}>
            Neutral {neutral}
          </Button>
          <Button onClick={() => onLeaveFeedback('bad')}>Bad {bad}</Button>
        </Div>
      </div>
    </>
  );
};
