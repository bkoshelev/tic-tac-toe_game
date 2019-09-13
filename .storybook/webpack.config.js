const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const root = path.resolve(__dirname, '..');
const node_modules = path.join(root, 'node_modules');

const modulesPath = path.join(root, 'src');

module.exports = async ({ config }) => {
  config.module.rules.splice(3, 1);
  config.module.rules = config.module.rules.map(f => {
    if (f.test.toString() === '/\\.css$/') {
      f.exclude = modulesPath;
    }
    return f;
  });

  config.resolve.extensions.push('.svg');
  config.module.rules = config.module.rules.map(data => {
    if (/svg\|/.test(String(data.test)))
      data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    return data;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: [{ loader: require.resolve('babel-loader') },
    { loader: require.resolve('react-svg-loader') }]
  });




  config.module.rules[0].test = /\.(js|ts)x?$/;
  config.module.rules[0].use.push({
    loader: 'linaria/loader',
    options: {
      sourceMap: true
    }
  });

  config.module.rules[1].test = /\.(png|woff|woff2|eot|ttf)$/;
  config.module.rules[1].use.push({
    loader: 'file-loader',

  })

  config.module.rules.push(
    {
      test: /\.css$/,
      include: modulesPath,
      exclude: node_modules, // Skal ikke være nædvendig
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local].[hash:base64:5]',
            },
            importLoaders: 1,
            sourceMap: true,
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.join(root, 'postcss.config.js')
            },
            ident: 'postcss',
            sourceMap: true,
          }
        },

      ],
    },
  )

  return config;

}


