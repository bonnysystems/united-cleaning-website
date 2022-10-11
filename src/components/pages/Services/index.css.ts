import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

export const section = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
});

export const sectionInfo = style({
  maxWidth: "600px",
  fontSize: "20px",
});

export const image = style({
  height: "auto",
});
