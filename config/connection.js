//set up connection with MySQL
var mysql = require("mysql");

var connection;

	if (process.env.JAWSDB_URL) {
		connection = mysql.createConnection(process.env.JAWSDB_URL);
	} else {
		connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	});
};

//make connection
connection.connect(function(err) {
	if (err) {
		console.log("error connection: " + err.stack);
		return;
	}
	console.log("connected at id " + connection.threadId);
});

//export connection for ORM
module.exports = connection;