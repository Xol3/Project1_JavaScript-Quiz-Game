const mysql = require('mysql2');

const connection = mysql2.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'sampleDB'
});

connection.connect(function(error) {
	if(error) {
		console.log('Error');
	} else {
		console.log('Connected');
	}
})