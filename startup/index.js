module.exports = function (app) {
    require('./config')();
    require('./logging')();
    require('./routes')(app);
    require('./db')();
};