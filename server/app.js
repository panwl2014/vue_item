let express = require('express');
let fs = require('fs');
let path = require('path');
let ejs = require('ejs');
let bodyParser = require('body-parser');
let session = require('express-session');
let router = require('./router/index.js')
// 创建应用程序
let app = express();

// 配置模板引擎
app.engine('.html', ejs.__express);

// 静态化
app.use('/static/', express.static(path.join(process.cwd(), './static/')))

// 配置session
app.use(session({
    secret: 'panwl',
    resave: false,
    saveUninitialized: true
}))

// 解析post请求
app.use(bodyParser.json());

// 使用路由
router(app);

// 渲染移动端
app.get('/', (req, res) => {
    res.render('home.html')
});

app.get('/admin', (req, res) => {
    res.render('admin.html')
})

// 创建服务
let httpPort = process.argv[2] || 3003;
let httpsPort = process.argv[3] || 3004;
let http = require('http');
let https = require('https');

let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

http.createServer(app).listen(httpPort, console.log('http' + httpPort));
https.createServer({key, cert},app).listen(httpsPort, console.log('http' + httpsPort));



