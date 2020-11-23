/* 
Title : Handle Request Response
Description: Handle Request and response
Author: joney spark
Date: 23-Nov-2020
*/

//dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
//module scaffolding

const handler = {};

handler.handleReqRes = (req, res) => {
    //request handling
    // get the url and parse it
    const parseURL = url.parse(req.url, true);
    const path = parseURL.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseURL.query;
    const headerObject = req.headers;

    const requestProperties = {
        parseURL,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject
    }

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payLoad) => {
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payLoad = typeof(payLoad) === 'object' ? payLoad : {};
        const payLoadString = JSON.stringify(payLoad);

        //return the final response

        res.writeHead(statusCode);
        res.end(payLoadString);
    })

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);

        res.end("Hello World Node.js Programmers");
    });
}

module.exports = handler;