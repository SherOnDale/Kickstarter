const routes = require('next-routes')();

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/campaign')
    .add('/campaigns/:address/requests', '/campaigns/requests')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
