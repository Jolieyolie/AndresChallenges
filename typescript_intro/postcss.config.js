// import tailwindcss from "@tailwindcss/postcss";

// export default {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };
// postcss.config.js (or .cjs / .mjs depending on your setup)
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {}, // autoprefixer and postcss‑import are optional / often unneeded in v4
  },
};
