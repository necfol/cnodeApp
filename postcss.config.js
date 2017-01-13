/**
 * Created by Necfol on 2017/1/13.
 */
module.exports = {
    plugins: [
        require('postcss-cssnext')({
            features: {
                rem: false
            }
        }), require('postcss-pxtorem')({
            rootValue: 20,
            propWhiteList: []
        })
    ]
}