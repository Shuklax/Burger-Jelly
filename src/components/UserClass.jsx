import React from "react";
import "../../App.css";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("child constructor")

    this.state = {
      userInfo:{
        name: "dummy",
        location: "dummy"
      },
      count: 0,
      count2: 2,
    };
  }



  async componentDidMount(){
    console.log("child mounted");

    const data = await fetch("https://api.github.com/users/Shuklax")
    const json = await data.json();

    this.setState({userInfo: json})
    console.log(json);

  }

  componentDidUpdate(){
    console.log("child updated");
  }

  componentWillUnmount(){
    console.log("child unmounted");
  }

  render() {
    //const { name, location, contact } = this.props;
    const { count2 } = this.state;
    const {login, location, avatar_url} = this.state.userInfo;

    console.log("child render")

    return (
      <div className="user-card">
        <img src = {avatar_url} />
        <br />
        <h2>
          {this.state.count} - {count2}
        </h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
            this.setState({count2:count2+1})
          }}
        >
          +
        </button>
        <h2>Name : {login}</h2>
        <h2>Location : {location}</h2>
        {/* <h3>Contact : {contact}</h3> */}

      </div>
    );
  }
}

export default UserClass;
