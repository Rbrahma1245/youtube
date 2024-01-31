import { Component } from "react";

import "./Display.scss";
import Card from "./Card";

export class Display extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.commentList);
    return (
      <div style={{ marginTop: 10 }}>
        {this.props.commentList.map((e, i) => {
          let current_date = new Date();

          let timeDifference = current_date - e.date;

          let secondsDifference = Math.floor(timeDifference / 1000);
          let minutesDifference = Math.floor(secondsDifference / 60);
          let hoursDifference = Math.floor(minutesDifference / 60);

          let remainingHours = hoursDifference % 24;
          let remainingMinutes = minutesDifference % 60;
          let remainingSeconds = secondsDifference % 60;

          return (
            <Card
              key={e.id + i}
              e={e}
              remainingHours={remainingHours}
              remainingMinutes={remainingMinutes}
              remainingSeconds={remainingSeconds}
            />
          );
        })}
      </div>
    );
  }
}

export default Display;
