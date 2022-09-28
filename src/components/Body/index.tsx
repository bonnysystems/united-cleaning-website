import React from "react";
import { container } from "./index.css";

interface Props {
  children: React.ReactElement<"div">["children"];
}

const Body = ({ children }: Props): React.ReactElement => (
  <main className={container}>{children}</main>
);

export default Body;
