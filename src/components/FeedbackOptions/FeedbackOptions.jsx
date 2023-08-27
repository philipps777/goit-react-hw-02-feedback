import { Div } from './FeedbackOptions.styled';
import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Div>
      <FeedbackButton feedbackType="good" onFeedbackClick={onLeaveFeedback}>
        Good
      </FeedbackButton>
      <FeedbackButton feedbackType="neutral" onFeedbackClick={onLeaveFeedback}>
        Neutral
      </FeedbackButton>
      <FeedbackButton feedbackType="bad" onFeedbackClick={onLeaveFeedback}>
        Bad
      </FeedbackButton>
    </Div>
  );
};
