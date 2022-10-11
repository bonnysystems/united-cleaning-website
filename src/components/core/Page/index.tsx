import React from "react";
import { container } from "./index.css";

interface Props {
  title: string;
  children: React.ComponentProps<"div">["children"];
}

const Page = ({ title, children }: Props): React.ReactElement => (
  <div className={container}>
    <h1>{title}</h1>
    {children}
  </div>
);

export default Page;
