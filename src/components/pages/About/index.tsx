import React from "react";
import Page from "../../core/Page";
import { container } from "./index.css";

const About = (): React.ReactElement => (
  <Page title="About">
    <div className={container}>
      <h2>
        United Cleaning Corporation started in 1992 to provide quality hood
        cleaning service in North New Jersey.
      </h2>
      <p>
        At United Cleaning we specialize in kitchen exhaust systems &#38;
        equipment pressure washing. We provide 24 hour emergency services and
        free estimates. We work in and around New Jersey and look forward to
        working with you!
      </p>
      <p>
        We strive to put customers first. With over 25 years in business serving
        Northern &#38; Central New Jersey, we have built a reputation of quality
        and service unsurpassed in the hood cleaning industry. Please note our
        work is guaranteed and your satisfaction is our main concern and goal.
      </p>
      <p>
        We provide pressure washing, steam cleaning and chemical treatment for
        all commercial and industrial hoods. We do restaurants, schools,
        hospitals, country clubs, and malls.
      </p>
    </div>
  </Page>
);

export default About;
