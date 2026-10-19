module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'src/tests/**/*.spec.js'
    ],

    preprocessors: {
      'src/tests/**/*.spec.js': ['webpack']
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',

      module: {
        rules: [
          {
            test: /\.[jt]sx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              
                options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    [
                    'babel-plugin-istanbul',
                    {
                        include: ['src/pages/Registro.jsx'],
                        exclude: ['src/tests/**']
                    }
                    ]
                ]
                }

            }
          }
        ]
      },

      resolve: {
        extensions: ['.js', '.jsx']
      }
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },

    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
