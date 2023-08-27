import { Component } from 'react';
import { AppContent } from './AppContent/AppContent';

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

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positivePercentage =
      totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

    return (
      <div className="app">
        <AppContent
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
          handleFeedback={this.handleFeedback}
        />
      </div>
    );
  }
}
