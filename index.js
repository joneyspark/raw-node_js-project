/* 
Title: Uptime Monitoring Application
Description: A Restful API to monitor up or down time of user defined links
Author: Joney spark
Date: 23-Nov-2020
*/
//dependencies

const http = require('http');

const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module scaffolding

const app = {};

//configuration

app.config = {
    port: 4000
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`)
    })
}

app.handleReqRes = handleReqRes;

//start the server

app.createServer();