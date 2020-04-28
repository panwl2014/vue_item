let path = require('path');
let root = process.cwd();

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        outputDir: path.join(root, '../server/static/home'),
        indexPath: path.join(root, '../server/views/home.html'),
        publicPath: '/static/home/'
    }
} else {
    let proxyObject = {
        target: 'http://localhost:3003'
    };
    module.exports = {

        devServer: {
            proxy: {
                '/data/ads': proxyObject,
                '/data/list': proxyObject,
                '/data/detail': proxyObject,
                '/data/buy': proxyObject,
                '/data/search': proxyObject,
                '/data/order': proxyObject,
                '/data/detail/addCar': proxyObject,
                '/data/detail/remove': proxyObject,
                '/data/car/list': proxyObject,
            }
        }
    }
}