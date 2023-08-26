import { FeedbackOptions } from 'components/Feedback/Feedback';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { Wrapper } from './AppContent.styled';

export const AppContent = ({
  state,
  handleFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const { good, neutral, bad } = state;

  return (
    <Wrapper className="app-content">
      <div className="content-section">
        <FeedbackOptions
          onLeaveFeedback={handleFeedback}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
      {countTotalFeedback() > 0 ? (
        <div className="content-section">
          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </div>
      ) : (
        <div className="content-section">
          <h2>Statistics</h2>
          <Notification message="No feedback given" />
        </div>
      )}
    </Wrapper>
  );
};
