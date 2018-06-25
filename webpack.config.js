// import camelCase from "lodash.camelcase";
// import upperFirst from "lodash.upperfirst";
// import webpack from "webpack";
// import { resolve } from "url";

// var isRelease = process.argv.indexOf('--release') > -1;

// var config = module.exports = {
//     entry: './app/app.ts',
//     output: {
//         path: __dirname + '/www/build/js',
//         filename: 'app.bundle.js'
//     },
//     externals: [
//         'cordova',
//         resolveExternals
//     ],
//     resolve: {
//         extensions: ['','.webpack.js','.web.js','.ts','.js']
//     },
//     module: {
//         loaders: [
//             {test: /\.ts$/, loader: 'ts-loader'}
//         ]
//     }
// };

// if (isRelease){
//     config.devtool = 'source-map';
//     config.plugins =[
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {warnings:false}
//         })
//     ];
// }
// function resolveExternals (context, request, callback){
//     return cordovaPlugin(request, callback) ||
//     callback();
// }
// function cordovaPlugin(request, callback){
//     var match = request.match(/^cordova\/(.+)$/);
//     var plugin = match && match[1];
    
//     if (plugin) {
//         plugin = camelCase(plugin);
//         plugin = upperFirst(plugin);
//         callback(null, 'window.cordova && cordova.plugins && cordova.plugins.' + plugin);
//         return true;
//     } 
// }