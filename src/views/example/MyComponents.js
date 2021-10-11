import React from "react";
import ChildComponents from "./ChildComponents";
import FormComponents from "./FormComponents";
import "./example.scss";

class MyComponent extends React.Component {
  state = {
    arrJob: [
      { id: "1", title: "Front-end", salary: "500" },
      { id: "2", title: "Tester", salary: "1500" },
      { id: "3", title: "Project manangement", salary: "5000" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };

  deleteJob = (job) => {
    this.setState({
      arrJob: this.state.arrJob.filter((item) => {
        return item.id !== job.id;
      }),
    });
    // console.log('deleteJob', job)
  };

  render() {
    return (
      <div className="example__wrapper">
        <FormComponents addNewJob={this.addNewJob} />
        <ChildComponents
          arrJobs={this.state.arrJob}
          deleteJob={this.deleteJob}
        />
      </div>
    );
  }
}

export default MyComponent;
