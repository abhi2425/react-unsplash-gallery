export  const breakpoints = {
  xs: 200,
  sm: 550,
  md: 960,
  lg: 1280,
  xl: 1920,
}

export const getColumns = (width) => {
  if (width < breakpoints.sm) {
    return 1
  } else if (width < breakpoints.md) {
    return 2
  } else if (width < breakpoints.lg) {
    return 3
  } else if (width < breakpoints.xl) {
    return 4
  } else {
    return 5
  }
}


