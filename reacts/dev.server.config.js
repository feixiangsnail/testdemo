function Config(){
    
    var files = {

        '/operators/*':{},
        '/application/*':{},
        '/applicationrecord/*':{},   
        '/manager/*':{},   
        '/*/*':{},        
    }

    for(var i in files){
        files[i].target ="http://192.168.101.195:23333/"
        files[i].changeOrigin = true;
    }
    return {
        port: 3000,
        disableHostCheck:true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        proxy: files
    }
}

module.exports =  Config();