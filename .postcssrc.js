module.exports = {
    plugins: {
        //不转换行内样式
        'postcss-pxtorem': {
            rootValue({ file }) {
                //不同文件草稿图大小不一样
                //vant草稿图 375px   项目草稿图 750px
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            //设置转换的样式
            propList: ['*'],
        },
    },
};