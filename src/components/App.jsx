import React, { Component } from "react";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  handleChange = evt => {
    //console.log(evt);
    const { value } = evt.target;

    this.setState(prevState => ({
      [value]: prevState[value] + 1
    }))

  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, current) => acc + current, 0)
  }

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0 ? 0 : ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2)
  }

  render() {

    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state)

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleChange}></FeedbackOptions>
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
}
