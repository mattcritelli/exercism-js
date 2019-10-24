export const colorCode = resistorColor => (
  COLORS.findIndex(color => resistorColor.toLowerCase() === color)
);

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
