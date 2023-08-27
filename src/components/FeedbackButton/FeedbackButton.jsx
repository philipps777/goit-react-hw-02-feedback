import { Button } from './FeedbackButton.styled';
export const FeedbackButton = ({ feedbackType, onFeedbackClick, children }) => (
  <Button onClick={() => onFeedbackClick(feedbackType)}>{children}</Button>
);
