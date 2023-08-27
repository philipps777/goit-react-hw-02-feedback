import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { Wrapper } from './AppContent.styled';
import { Section } from 'components/Section/Section';

export const AppContent = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  handleFeedback,
}) => {
  return (
    <Wrapper className="app-content">
      <Section title="Please leave your feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification message="There is no feedback" />
        </Section>
      )}
    </Wrapper>
  );
};
