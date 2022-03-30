interface CustomBreakpointProps {
  values: {
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  };
}

export interface CustomBreakpoints {
  breakpoints: CustomBreakpointProps;
}

// Breakpoints values should be same as in CSS variables (globals/styles/variables.scss)
const DEFAULT: CustomBreakpoints = {
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
};

export const BREAKPOINTS = DEFAULT;
