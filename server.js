var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'serra',
        password: '2',
        server: 'LAPTOP-5MH69C15\\SQLEXPRESS',
        database: 'NORTHWND',
      //  port: 1434,
        options: {
            trustedConnection: false,
           // encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: true,

        }
        //   dialect: "mssql"
        //     dialectOptions: {
        //         instanceName: "SQLEXPRESS"
        //     }
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Categories', function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});

// app.post("/",function(req){
//     res.send("post istegi gönderildi..");
// })
var server = app.listen(3000, function () {
    console.log('Server is running..');
});

