import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  padding: "40px 120px",
  overflow: "auto",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "30px 80px",
    },
    "screen and (max-width: 425px)": {
      padding: "20px 40px",
    },
  },
});
