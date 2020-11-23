/* 
Title : Routes
Description: Application Routes
Author: joney spark
Date: 23-Nov-2020
*/

//dependencies

const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler');
const {notFoundHandler} = require('./handlers/routeHandlers/notFoundHandler');
const routes = {
    sample: sampleHandler,
    notFound: notFoundHandler,
};

module.exports = routes;