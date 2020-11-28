/* 
Title: Uptime Monitoring Application
Description: A Restful API to monitor up or down time of user defined links
Author: Joney spark
Date: 23-Nov-2020
*/
//dependencies

const http = require('http');

const {handleReqRes} = require('./helpers/handleReqRes');

const environment = require('./helpers/environments');

const data = require('./lib/data');

// app object - module scaffolding

const app = {};

//configuration

/* app.config = {
    port: 4000
}; */

//testing file system

/* data.create('test', 'newFile', {'name': 'Bangladesh', 'language': 'Bangla'}, (err) => {
    console.log(`Error was `, err);
});

data.read('test', 'newFile', (err, data) => {
    console.log(err, data);
});
 */

/* data.update('test', 'newFile', {'name': 'England', 'language': 'English'}, (err) => {
    console.log(`Error was `, err);
}); */


data.delete('test', 'newFile', (err) => {
    console.log(`Error was `, err);
});

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`)
    })
}

app.handleReqRes = handleReqRes;

//start the server

app.createServer();