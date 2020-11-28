/* 
Title: Enviroments
Description: Handle all environments related things
Author: Joney spark
Date: 25-Nov-2020
*/

//dependencies

//module scaffolding

const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
};

environments.production = {
    port: 5000,
    envName: 'production',
};

//determine which enviroment was passed

const currentEnvironment = typeof process.env.NODE_ENV === 'string' 
? process.env.NODE_ENV 
: 'staging';

//export corresponding environment object

const enviromentToExport = typeof environments[currentEnvironment] === 'object' 
? environments[currentEnvironment] 
: environments.staging;

module.exports = enviromentToExport;


