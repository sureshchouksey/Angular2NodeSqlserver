var sql = require('mssql');

	var config = {
		user:'sa',
		password:'fulcrum@2016',
		server:'192.168.0.53',
		database:'godbTargetDev',
		port:56693

	}

	var connection = mssql.connect(dbConfig, function (err) {
	    if (err)
	        throw err; 
	});

module.exports = connection; 
