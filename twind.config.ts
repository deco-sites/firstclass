/**
 * WARNING: DO NOT USE ANY TWIND FUNCTIONS in here otherwise the
 * vscode-twind-intellisense plugin may stop working. To overcome
 * this issue, use animations and keyframes intead of twind's animation
 * function.
 */
import type { Options } from "$fresh/plugins/twind.ts";

const gridCols = ([arg]: string[]) => {
  const template = Number.isInteger(Number(arg))
    ? `repeat(${arg}, minmax(0, 1fr))`
    : arg
    ? arg.replace(/(^\[)|(\])$/g, "").replace(/_/g, " ")
    : arg;

  return {
    "grid-template-columns": template,
  };
};

const gridRows = ([arg]: string[]) => {
  const template = Number.isInteger(Number(arg))
    ? `repeat(${arg}, minmax(0, 1fr))`
    : arg
    ? arg.replace(/(^\[)|(\])$/g, "").replace(/_/g, " ")
    : arg;

  return {
    "grid-template-rows": template,
  };
};

const options: Omit<Options, "selfURL"> = {
  theme: {
    extend: {
      width: {
      "fit-content": "fit-content",
      "half": "50%",
      },
      colors: {
        "default": "#FFFFFF",
        "yellow-custom" : "#ffcc00",
        "header": "#FFFFFF",
        "badge": "#8C3D3D", // shopping cart tem isso tambem
        "footer": "#003232",
        "interactive": "#161616",
        "interactive-inverse": "#FFFFFF",
        "hover": "rgba(0, 0, 0, 0.04)",
        "hover-inverse": "rgba(255, 255, 255, 0.4)",
        "white": "#FFFFFF",
        "black": "#000000",
        "neutral100": "#E6E6E6",
        "neutral200": "#E5E1E6",
        "neutral300": "#B5B5B5",
        "neutral500": "#7F7D80",
        "neutral600": "#676767",
        "primary500": "#FFCE00",
      },
      textColor: {
        "default": "#161616",
        "default-inverse": "#FFFFFF",
        "subdued": "#66736C",
        "subdued-inverse": "#C6C6C6",
        "price": "#8C3D3D",
        "section-title": "#161616",
        "positive": "#1A7346",
        "critical": "#CC2E2E",
        "white": "#FFFFFF",
        "black": "#000000",
      },
      borderColor: {
        "default": "#D4DBD7",
        "default-inverse": "#FFFFFF",
        "interactive": "#161616",
        "focus": "#3379EF",
        "positive": "#1A7346",
        "critical": "#B44125",
      },
      outline: {
        interactive: ["2px solid #3379EF", "2px"],
      },
      fontSize: {
        "display": ["1.8125rem", "2.188rem"],
        "heading-1": ["3.5rem", "4.2rem"],
        "heading-2": ["2.25rem", "2.75rem"],
        "heading-3": ["1.875rem", "2.25rem"],
        "heading-4": ["1.625rem", "2rem"],
        "heading-5": ["1.4375rem", "1.75rem"],
        "heading-6": ["1.313rem", "1.563rem"],
        "paragraph-xl": ["1.25rem", "1.5rem"],
        "paragraph-lg": ["1.125rem", "2.375rem"],
        "paragraph": [".8125rem", "1.625rem"],
        "price": ["1.063rem", "1.25rem"],
        "price-sm": [".875rem", ".875rem"],
        "menu": ["16px", "20px"],
        "button": [".938rem", "1.25rem"],
        "button-sm": [".75rem", ".875rem"],
        "body": ["16px", "20px"],
        "caption": [".75rem", ".875rem"],
        "caption-lg": [".8125rem", "1rem"],
        "caption-sm": [".625rem", ".875rem"],
        "list-price": ["10px", "20px"],
      },
      fontWeight: {
        "display": "300",
        "heading-1": "500",
        "heading-2": "400",
        "heading-3": "500",
        "heading-5": "300",
        "paragraph-lg": "400",
        "menu": "400",
        "button": "400",
        "body": "400",
        "caption": "400",
        "list-price": "400",
      },
      animation: {
        "slide-left": "slide-left-frame 0.4s ease normal",
        "slide-right": "slide-right-frame 0.4s ease normal",
        "slide-bottom": "slide-bottom-frame 0.4s ease normal",
      },
      keyframes: {
        "slide-left-frame": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
      boxShadow: {
        sm: "0px 1px 3px 0px #00000014",
        default: "0px 1px 4px 0px #0000001F",
        md: "0px 1px 5px 0px #00000024",
        lg: "0px 4px 10px 0px #0000001F",
      },
    },
    fontFamily: {
      sans: ["Albert Sans", "sans-serif"],
      serif: ["inherit", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  preflight: (preflight) => ({
    ...preflight,

    // Stick footer to the bottom of the page
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    'section[data-manifest-key="./sections/Footer.tsx"]': {
      marginTop: "auto",
    },

    // Prevent scroll when modal is open
    "body[no-scroll]": {
      overflow: "hidden",
      height: "100vh",
    },
  }),
  plugins: {
    backdrop: {
      "&::backdrop": {
        background: "rgba(0, 0, 0, 0.5)",
      },
    },
    "scroll-snap-center": {
      "scroll-snap-align": "center",
    },
    "scroll-x-mandatory": {
      "scroll-snap-type": "x mandatory",
    },
    "snap-x": {
      "scroll-snap-type": "x var(--tw-scroll-snap-strictness)",
    },
    "snap-mandatory": {
      "--tw-scroll-snap-strictness": "mandatory",
    },
    "fill": (parts) => ({ "fill": parts.join("-") }),
    "max-h-min": {
      "max-height": "min-content",
    },
    "snap": ([mod]) => ({ "scroll-snap-align": mod }),
    "grid-cols": gridCols,
    "grid-rows": gridRows,
    "scroll-smooth": {
      "scroll-behavior": "smooth",
      "-webkit-overflow-scrolling": "touch",
    },
    "scrollbar-none": {
      "scrollbar-width": "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
};

export default options;
