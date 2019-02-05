module.exports = {
	identity: 'crud',
	
	connection: 'mysqlDB',
	schema:true,
	migrate: 'alter',
	
	attributes: {
		firstName: 'string',
		lastName: 'string'
	}
};
