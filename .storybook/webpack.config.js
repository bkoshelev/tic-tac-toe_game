const path = require('path');

module.exports = async ({ config }) => {
    config.module.rules.splice(3, 1);

    config.resolve.extensions.push('.svg');


    config.module.rules[0].test = /\.(js|ts)x?$/;

    config.module.rules[0].use.push({
        loader: 'linaria/loader',
        options: {
            sourceMap: true
        }
    });

    config.module.rules[1].test =  /\.(png|woff|woff2|eot|ttf)$/;
    config.module.rules[1].use.push({
        loader: 'file-loader',

    })

    config.module.rules.push(
        {
            test: /\.svg$/,
            exclude: /node_modules/,
            use: [
              'babel-loader',
              'react-svg-loader',
            ],
          },
    )

   /*  config.module.rules = config.module.rules.map( data => {
        if (/svg\|/.test( String( data.test ) ))
            data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

        return data;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: require.resolve('babel-loader') },
              { loader: require.resolve('react-svg-loader') }]
    }); */
    return config;

}


