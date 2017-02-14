var webpack=require('webpack');

module.exports={
    entry:'F:\\web-pack2\\web-pack\\src\\main.ts',
    output:{
        path:'F:\\web-pack2\\web-pack\\dist',
        filename:'app.bundle.js'
    },
    module:{
        loaders:[
            { test:/\.ts$/,loader:'ts-loader'}
        ]
    },
    resolve:{
        extensions:['*','.js','.ts']
    }

}