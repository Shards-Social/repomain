module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        },
        corejs: "3",
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react" // Add this line if you're using React
  ]
};
