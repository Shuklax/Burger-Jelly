import { useContext } from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="text-3xl justify-center m-4 p-4 font-bold">
        Contact Us Page
      </h1>
      <div>
        <input type="text" placeholder="name..." className="m-4"/>
        <input type="text" placeholder="reason..." className="m-4"/>
        <button className="rounded-lg border border-black m-4 p-2">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
