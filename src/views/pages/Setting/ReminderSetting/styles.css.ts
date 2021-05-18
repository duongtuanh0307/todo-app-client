import { style } from "@vanilla-extract/css";

export const settingReminderForm = style({});

export const inputTime = style({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  ":first-of-type": { paddingRight: 20 },
});

export const actionButtons = style({
  marginTop: 10,
  display: "flex",
  justifyContent: "flex-end",
});

export const inputTimesArea = style({
  display: "flex",
  justifyContent: "space-between",
});
