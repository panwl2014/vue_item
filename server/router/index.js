let page = require('./page');
let home = require('./home');
let admin = require('./admin');

module.exports = app => {
    app.use(page)
    app.use(home)
    app.use(admin)
}