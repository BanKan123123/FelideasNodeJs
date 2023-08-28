
const felidaeRoute = require('./felidae');
const siteRoute = require('./site');
const meFelidaeRoute = require('./me-felidae');

function route(app) {
    app.use('/felidaes', felidaeRoute);

    app.use('/me', meFelidaeRoute)

    app.use('/', siteRoute);
}

module.exports = route;