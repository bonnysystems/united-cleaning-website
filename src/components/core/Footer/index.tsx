import { Component } from "preact";
import { container, copyrightText, images } from "./index.css";

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className={container}>
        <span className={copyrightText}>
          &copy; {currentYear} United Cleaning Corp.
        </span>
        <div className={images}>
          <img src="/logos/bbb-logo.png" alt="" width={250} height={100} />
          <img src="/logos/njbia-logo.png" alt="" width={100} height={100} />
        </div>
      </footer>
    );
  }
}

export default Footer;
