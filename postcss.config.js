const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./src/pages/*.js",
      "./src/pages/**/*.js",
      "./src/components/*.js",
      "./src/components/**/*.js",
    ],
    whitelistPatterns: [/^slick-/],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
