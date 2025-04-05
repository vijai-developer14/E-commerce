import React from "react";
import "../styles/contactUs.css";
export default function ContactUs() {
  return (
    <div className="contactUs_bg">
      <div className="contactUs_question">
        <h1>Question?</h1>
        <p>
          We’d love to hear from you! Whether you have a question about our
          sustainable products, need assistance with your order,or just want to
          say hello – we’re here to help.
        </p>
        {/* ..................................................form */}
        <form>
          {/* <h3>Name</h3> */}
          <input type="text" placeholder="Name*" id="contactUs_name" />

          {/* <h3>Email</h3> */}
          <input type="text" placeholder="Email*" id="contactUs_mail" />

          {/* <h3>Your Note</h3> */}
          <input type="text" placeholder="Your Note*" id="contactUs_yourNote" />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="mailSection">
        <div className="message_iconBg">
          <div className="message_icon"></div>
        </div>
        <p>SAY HELLO</p>
        <h4>greenmart@gmail.com</h4>
      </div>
    </div>
  );
}
