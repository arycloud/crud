var mysqlAdapter = require('sails-mysql');

module.exports = {
	adapters: {
		mysqlAdapt: mysqlAdapter
	},

  connections: {
    mysqlDB: {
		adapter: 'mysqlAdapt',
		host: process.env.MYREL09-MYCHART09_SERVICE_HOST,
		database: 'node',
		user:'root',
		password:'f{e$mP8',
		port: MYREL09-MYCHART09_SERVICE_PORT,
		supportBigNumbers:true, //true/false
		debug:['ComQueryPacket'], //false or array of node-mysql debug options
		trace:true //true/false
    } 
  }
};
