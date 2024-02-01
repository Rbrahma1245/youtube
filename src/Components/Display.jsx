import { Component } from "react";

import "./Display.scss";
import Card from "./Card";

export class Display extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.updateTimeDifferences();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimeDifferences() {
      let updatedCommentList = this.props.commentList.map((comment) => {

      let current_date = new Date();
      let timeDifference = current_date - comment.date;
      let secondsDifference = Math.floor(timeDifference / 1000);
      let minutesDifference = Math.floor(secondsDifference / 60);
      let hoursDifference = Math.floor(minutesDifference / 60);

      comment.hours = hoursDifference % 24;
      comment.minutes = minutesDifference % 60;
      comment.seconds = secondsDifference % 60;

      return comment;
    });

    this.setState({
      commentList: updatedCommentList,
    });
  }

  render() {
    console.log(this.props.commentList);
    return (
      <div style={{ marginTop: 10 }}>
        {this.props.commentList.map((e, i) => {
          return (
            <Card
              key={e.id + i}
              e={e}
              remainingHours={e.hours}
              remainingMinutes={e.minutes}
              remainingSeconds={e.seconds}
            />
          );
        })}
      </div>
    );
  }
}

export default Display;
