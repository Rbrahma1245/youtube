import { Component } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export class Card extends Component {
  constructor() {
    super();
 
  }

 
  render() {
    let { name, image, comment } = this.props.e;

    let { remainingSeconds, remainingMinutes, remainingHours } = this.props;

    

    return (
      <div className="container">
        <div className="box">
          <div style={{ width: "5%" }}>
            <img className="avatar" src={image} alt="Avatar" />
          </div>

          <div className="box-header">
            <div className="box-title">
              <span>{name}</span>

              <span className="display-time">
                {remainingHours == 0 ? (
                  remainingMinutes == 0 ? (
                    remainingSeconds == 0 ? (
                      ""
                    ) : (
                      <span>{remainingSeconds} sec ago</span>
                    )
                  ) : (
                    <span>{remainingMinutes} min ago</span>
                  )
                ) : (
                  <span>{remainingHours} hours ago</span>
                )}
              </span>
            </div>

            <span style={{ wordBreak: "break-word", fontSize: 14 }}>
              {comment}
            </span>

            <div className="btn-decor">
              <button className="like">
                <FaThumbsUp />
              </button>
              <button className="dislike">
                <FaThumbsDown />
              </button>
              <button className="reply">Reply</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
