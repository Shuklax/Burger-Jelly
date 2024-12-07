import { useState } from "react";
import "../../App.css";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(2);

    return (
        <div className="user-card">
            <br />
            <h3>{count} - {count2}</h3>
            <h2>Name : {props.name}</h2>
            <h2>Location : {props.location}</h2>
            <h3>Contact : {props.contact}</h3>
        </div>
    )
}

export default User;