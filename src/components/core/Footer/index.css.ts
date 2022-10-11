import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap",
  padding: "20px",
});

export const copyrightText = style({
  fontSize: "18px",
});

export const images = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
});

export const image = style({ height: "auto" });
