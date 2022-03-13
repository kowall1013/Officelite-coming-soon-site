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
  primaryBlue: "hsla(228, 100%, 66%)",
  secondaryBlue: "hsla(228, 100%, 75%)",
  primaryDark: "hsla(228, 22%, 26%)",
  secondaryDark: "hsla(229, 22%, 19%)",
  gray: "hsla(227, 13%, 52%)",
  orange: "hsla(0, 83%, 65%)",
};