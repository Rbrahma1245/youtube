import { Component } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  names,
} from "unique-names-generator";
import { AvatarGenerator } from "random-avatar-generator";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Display.scss";

export class InputField extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
    };
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }
  handleSubmit() {
    if (this.state.inputText == "") {
      toast.error("please add your comment.");
    } else {
      const uniqueId = uuidv4(); // Generate a new unique ID

      let generator = new AvatarGenerator();
      let name = uniqueNamesGenerator({
        dictionaries: [adjectives, names],
        separator: " ",
        style: "capital",
      });
      const randomImage = generator.generateRandomAvatar(name); // Generate a new random image
      let date = new Date();

      this.props.addComment({
        id: uniqueId.slice(0, 8),
        comment: this.state.inputText,
        date: date,
        name: name,
        image: randomImage,
      });
      this.setState({ inputText: "", uniqueId: "" });

      toast.success("Commented successful.");
    }
  }

  render() {
    return (
      <div>
        <ToastContainer position="top-center" autoClose={2000} />
        <input
          className="text-field"
          type="text"
          placeholder="Add a comment..."
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />

        <button
          className="add-comment-btn"
          onClick={this.handleSubmit.bind(this)}
        >
          Add Comment
        </button>
      </div>
    );
  }
}

export default InputField;
