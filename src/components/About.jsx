import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="AboutUs">
            <h1>ABOUT US</h1>
            <h2>this is the about us page</h2>
            <User name={"Harsh Shukla (function)"} location={"Mangalore"} contact={"Shuklax@Github"}/>


            <UserClass name={"Harsh Shukla (class)"} location={"Mangalore"} contact={"Shuklax@Github"}/>
        </div>
    )
}

export default About;