import React from "react";
import "../styles/footer.css";
export default function Footer() {
  return (
    <div className="bgFooter">
      <h1 className="line"></h1>
      <footer className="cnt">
        <div>
          <h4>Associate</h4>
          <ul>
            <li>About Us</li>
            <li>Work with us</li>
            <li>Sell with us </li>
            <li>Account</li>
          </ul>
        </div>

        <div>
          <h4>Policies</h4>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy policy</li>
            <li>Return policy</li>
            <li>Site map</li>
          </ul>
        </div>

        <div>
          <h4>Useful</h4>
          <ul>
            <li>Payment method</li>
            <li>Location we ship to</li>
            <li>Estimated delivery time</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h4>Get in Touch</h4>
          <h5>greenmart@gmail.com</h5>
          <form>
            <input type="text" placeholder="Enter mail" />
            <input type="submit" />
          </form>
        </div>
      </footer>
      <p id="copyrights">All rights reserved &#xA9; 2024 Greenmart.</p>
    </div>
  );
}
