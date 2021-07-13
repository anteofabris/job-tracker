import React from "react";
import Topbar from "./Topbar.jsx";
import css from "./styles/HomePageStyles.css";

//Top bar - score, date, record, time of current application, average => could be a wider-used component
//Form - Form
// Submit response => could be connecting to an API and generating random image or quote
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.onHomePageInputChange = this.onHomePageInputChange.bind(this);

    this.state = {
      "job-title": "",
      company: "",
      "posting-link": "",
      salary: "",
      "hr-grad": "",
      "technical-fit": "",
      "culture-fit": "",
      "recruiter-name": "",
      "recruiter-company": "",
      contacted: "",
    };
  }

  onHomePageInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="hp-container">
        <Topbar />
        <div id="form-res">
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
            <input
              onChange={this.onHomePageInputChange}
              name="hr-grad"
              type="text"
              placeholder="# of HR Grads"
            ></input>
            <input
              onChange={this.onHomePageInputChange}
              name="technical-fit"
              type="text"
              placeholder="Technical fit x/y"
            ></input>
            <input
              onChange={this.onHomePageInputChange}
              name="culture-fit"
              type="text"
              placeholder="Culture Fit"
            ></input>
            <textarea name="notes" form="form-container">
              Type your notes here...
            </textarea>
            <input name="recruiter-name" placeholder="Recruiter Name"></input>
            <input
              name="recruiter-company"
              placeholder="Recruiter Company"
            ></input>
            <input name="contacted" placeholder="Contacted?"></input>
          </form>
          <div id="res-container">I am Res</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
