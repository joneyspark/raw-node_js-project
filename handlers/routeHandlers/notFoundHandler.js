/* 
Title : Not Found Handler
Description: Not Found Handler
Author: joney spark
Date: 23-Nov-2020
*/

//moudle scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was Not Found',
    });
}

module.exports = handler;