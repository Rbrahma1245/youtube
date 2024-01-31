import { Component } from "react";
import InputField from "./InputField";
import Count from "./Count";
import Display from "./Display";

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }


  addComment = (comment) => {
    this.setState((prev) => ({
      commentList: [...prev.commentList, comment],
    }));
  };
  render() {

    return (
      <div style={{marginTop:10, width:"100%"}}>
        <Count commentList={this.state.commentList}/>
        <InputField addComment={this.addComment} />
        <Display commentList={this.state.commentList} />
      </div>
    );
  }
}

export default Youtube;

