import React from "react";
import "../../App.css";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        count:0,
        count2:2, 
    }
  }
  render() {
    const {name, location, contact} = this.props
    const {count2} = this.state;

    return (
      <div className="user-card">
        <br />
        <h2>{this.state.count} - {count2}</h2>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h3>Contact : {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
