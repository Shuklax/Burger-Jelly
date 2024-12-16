import { useState } from "react";
import "../../App.css";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, seCount2] = useState(2);

    return (
        <div className="user-card bg-gray-50 rounded-lg">
            <br />
            <h2>{count} - {count2}<button onClick={()=>{
                setCount(count + 1);
                seCount2(count2 + 1);
            }}>{"  +  "}</button></h2>
            <h2>Name : {props.name}</h2>
            <h2>Location : {props.location}</h2>
            <h3>Contact : {props.contact}</h3>
        </div>
    )
}

export default User;