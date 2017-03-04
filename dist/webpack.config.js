var webpack=require('webpack');
var HtmlWebPackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'F:\\Angular2-starter-pack\\src\\main.ts',
    output:{
        path:'F:\\Angular2-starter-pack\\dist',
        filename:'app.bundle.js'
    },
    module:{
        loaders:[
            { test:/\.ts$/,loader:'ts-loader'}
        ]
    },
    resolve:{
        extensions:['*','.js','.ts']
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            
        })
    ]

}