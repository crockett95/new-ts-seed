module.exports = function (api) {
  var presets = [
    ["@babel/env",
      {
        "targets": "> 0.5%, last 2 versions, Firefox ESR, not dead, ie >= 11"
      }
    ],
    "@babel/preset-typescript"
  ];

  var plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    ["@babel/transform-runtime",
      {
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ];

  if (api.env('test')) {
    plugins.push(["istanbul",{
      "exclude": [
        "test/**/*.{js,ts}"
      ]
    }]);
  }

  return {
    presets: presets,
    plugins: plugins
  };
}
