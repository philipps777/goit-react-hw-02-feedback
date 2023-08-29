import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedbackType => {
    this.setState(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="app">
        <Wrapper className="app-content">
          <Section title="Please leave your feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          {totalFeedback > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positivePercentage}
              />
            </Section>
          ) : (
            <Section title="Statistics">
              <Notification message="There is no feedback" />
            </Section>
          )}
        </Wrapper>
      </div>
    );
  }
}
