import React from "react";
import Topbar from "./Topbar.jsx";

//Top bar - score, date, record, time of current application, average => could be a wider-used component
//Form - Form
// Submit response => could be connecting to an API and generating random image or quote
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.onHomePageInputChange = this.onHomePageInputChange.bind(this);
  }

  onHomePageInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Topbar />
        <form id="form-container">
          <input
            onChange={this.onHomePageInputChange}
            name="job-title"
            type="text"
            placeholder="Job Title"
          ></input>
          <input
            onChange={this.onHomePageInputChange}
            name="company"
            type="text"
            placeholder="Company"
          ></input>
          <input
            onChange={this.onHomePageInputChange}
            name="posting-link"
            type="text"
            placeholder="Link To Posting"
          ></input>
          <input
            onChange={this.onHomePageInputChange}
            name="salary"
            type="text"
            placeholder="Salary Offered"
          ></input>
        </form>
        <div id="response-container"></div>
      </div>
    );
  }
}

export default HomePage;
