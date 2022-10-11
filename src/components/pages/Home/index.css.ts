import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const section = style({
  width: "100%",
});

export const homeSection = style([
  section,
  {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    flexWrap: "wrap",
  },
]);

export const heroDetails = style({
  width: "500px",
});

export const heading = style({
  fontSize: "3em",
});

export const heroImage = style({});
