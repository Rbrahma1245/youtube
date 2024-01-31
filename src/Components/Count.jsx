import { Component } from "react";

export class Count extends Component {
  render() {
    return <div style={{marginBottom:10, textAlign:"left"}}>{this.props.commentList.length}  Comments</div>;
  }
}

export default Count;
