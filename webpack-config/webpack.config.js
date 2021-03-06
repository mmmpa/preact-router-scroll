const path = require('path')

const {
  SIDE = 'spa',
  MODE = 'development',
  DEV_SERVER_PORT = 9000
} = process.env

const isDevMode = MODE === 'development'
const isBuildMode = MODE === 'build'
const isSpa = SIDE === 'spa'

const target = isSpa ? 'web' : 'web'
const mode = isBuildMode ? 'production' : 'development'
const entry = isSpa ? './src/index.spa.tsx' : './src/index.ssr.tsx'
const filename = isSpa ? 'spa.js' : `ssr.js`

const output = { path: path.resolve(__dirname, '../dist'), filename }
const resolve = { extensions: [".ts", ".tsx", ".js"] }
const modules = {
  rules: [
    {
      test: /\.tsx?$/,
      use: [
        { loader: 'ts-loader' },
      ],
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [["@babel/preset-env", { targets: { ie: 11 } }]],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            [
              "@babel/plugin-transform-runtime",
              {
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "useESModules": false
              }
            ],
            ["@babel/plugin-transform-react-jsx", { "pragma": "h" }],
          ]
        }
      }
    },
    {
      test: /\.tsx?$/,
      loader: 'eslint-loader',
      options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: true,
        // fix: true,
      },
    },
  ]
}

const devtool = isBuildMode ? 'source-map' : 'inline-source-map'
const plugins = []

let addOns = {}

if (isDevMode) {
  Object.assign(addOns, {
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      compress: true,
      port: DEV_SERVER_PORT,
      historyApiFallback: true,
    }
  })
}

if (isBuildMode && isSpa) {
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  const CompressionPlugin = require('compression-webpack-plugin');

  Object.assign(addOns, {
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    }
  })

  plugins.push(
    new CompressionPlugin({
      filename: '[path].gz[query]'
    })
  )
}

module.exports = {
  target,
  mode,
  entry,
  output,
  resolve,
  plugins,
  module: modules,
  devtool,

  ...addOns,
}
