import React, { useState } from "react";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];


  const handleChange = evt => {

    const { value } = evt.target;

    switch (value) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;

      default:
        break;
    }

  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const positivePercentage = () => {
    return countTotalFeedback() === 0 ? 0 : ((good / countTotalFeedback()) * 100).toFixed(2)
  }

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = positivePercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleChange}></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0
          ? <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedback}></Statistics>
          : <Notification message="There is no feedback"></Notification>
        }
      </Section>

    </div>
  );
}
