const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export const COLORS = {
  primary: "hsla(219, 43%, 16%)",
  secendary: "hsla(218, 20%, 36%)",
  ash: "hsla(30, 33%, 93%)",
  white: "hsla(30, 29%, 97%)",
  violet: "hsla(264, 100%, 69%)",
  pink: "hsla(292, 76%, 54%)",
  orange: "hsla(31, 100%, 65%)",
};