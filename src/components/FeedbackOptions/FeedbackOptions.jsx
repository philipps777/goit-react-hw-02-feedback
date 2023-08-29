import { Div } from './FeedbackOptions.styled';
import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Div>
      {options.map(option => (
        <FeedbackButton
          key={option}
          feedbackType={option}
          onFeedbackClick={onLeaveFeedback}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </FeedbackButton>
      ))}
    </Div>
  );
};
