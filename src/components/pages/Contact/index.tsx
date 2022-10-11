import React from "react";
import Page from "../../core/Page";
import { container } from "./index.css";

const Contact = (): React.ReactElement => (
  <Page title="Contact">
    <div className={container}>
      <p>
        If you have any questions or would like to reach out to us, give us a
        call.
      </p>
      <details>
        <summary>Telephone Number</summary>
        <a href="tel:9739424825">(973) 942-4825</a>
      </details>
      {/* or leave us a fax at ??? */}
      <p>
        If you can&apos;t reach out to us via cell,{" "}
        <a href="mailto:unitedcorp@optonline.net">shoot us an email</a>.
      </p>
    </div>
  </Page>
);

export default Contact;
