import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent mounted");
  }

  render() {
    console.log("parent render");
    return (
      <div className="AboutUs">
        <h1>ABOUT US</h1>
        <h2>this is the about us page</h2>
        {/* <User name={"Harsh Shukla (function)"} location={"Mangalore"} contact={"Shuklax@Github"}/> */}

        <UserClass
          name={"Harsh Shukla (class)"}
          location={"Mangalore"}
          contact={"Shuklax@Github"}
        />

      </div>
    );
  }
}

export default About;
