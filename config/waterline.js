var mysqlAdapter = require('sails-mysql');

module.exports = {
	adapters: {
		mysqlAdapt: mysqlAdapter
	},

  connections: {
    mysqlDB: {
		adapter: 'mysqlAdapt',
		host: process.env.MYSQL_SERVICE_HOST,
		database: 'default_db_name',
		user:'root',
		password:'default_password',
		port: process.env.MYSQL_SERVICE_PORT,
		supportBigNumbers:true, //true/false
		debug:['ComQueryPacket'], //false or array of node-mysql debug options
		trace:true //true/false
    } 
  }
};
