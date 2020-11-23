/* 
Title : sample Handler
Description: Sample Handler
Author: joney spark
Date: 23-Nov-2020
*/

//moudle scaffolding

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    
    callback(200, {
        message: 'This is a sample URL',
    });
}

module.exports = handler;