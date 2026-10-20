module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
    'src/tests/**/*.spec.js',
    'src/tests/**/*.spec.jsx'
    ],

    preprocessors: {
    'src/tests/**/*.spec.js': ['webpack'],
    'src/tests/**/*.spec.jsx': ['webpack']
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
                        include: [
                        'src/pages/Registro.jsx',
                        'src/pages/Inscripcion.jsx',
                        'src/pages/Torneos.jsx',
                        'src/pages/Equipos.jsx',
                        'src/pages/Partidas.jsx',
                        'src/pages/Ranking.jsx',
                        'src/data/datos.js'
                        ],
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
