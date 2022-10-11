import { Component } from "preact";
import { container } from "./index.css";

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className={container}>
        &copy; {currentYear} United Cleaning Corp.
      </footer>
    );
  }
}

export default Footer;
