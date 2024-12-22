import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {

    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="contact">
            <h1>Contact Us Page</h1>
            <h4>{loggedInUser}</h4>
        </div>
    )
}

export default Contact;