
var express = require('express');

var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
var sql = require('mssql');

	var config = {
		user:'sa',
		password:'fulcrum@2016',
		server:'192.168.0.53',
		database:'godbTargetDev',
		port:56693

	}

app.get('/api/quotation',function(req,res){	

	sql.connect(config,function(err){
		if(err) console.log(err);

		var request = new sql.Request();

		
		var query="select PkQuotationId QuotationId,FkProductId ProductId,ProductPlanCode PlanCode,FkAgentCode AgentCode,LAFirstName +' ' +LALastName FullName from AskQuotation where ProductPlanCode='TPE12' and FkAgentCode=1019";
		request.query(query,function(err,recordSet){
			if(err) console.log(err);
			//res.send(recordSet.recordset);
			res.status(200).json(recordSet.recordset);
		})
	})
})

app.get('/api/incompleteForm',function(req,res){	

	sql.connect(config,function(err){
		if(err) console.log(err);

		var request = new sql.Request();
		var query="select PkQuotationId QuotationId,FkProductId ProductId,ProductPlanCode PlanCode,FkAgentCode AgentCode,LAFirstName +' ' +LALastName FullName from AskQuotation where ProductPlanCode='TPE12' and FkAgentCode=147939";
		request.query(query,function(err,recordSet){
			if(err) console.log(err);
			//res.send(recordSet.recordset);
			res.status(200).json(recordSet.recordset);
		})
	})
})

app.get('/api/pendingForm',function(req,res){	

	sql.connect(config,function(err){
		if(err) console.log(err);

		var request = new sql.Request();
		var query="select PkQuotationId QuotationId,FkProductId ProductId,ProductPlanCode PlanCode,FkAgentCode AgentCode,LAFirstName +' ' +LALastName FullName from AskQuotation where ProductPlanCode='TPE12' and FkAgentCode=170448";
		request.query(query,function(err,recordSet){
			if(err) console.log(err);
			//res.send(recordSet.recordset);
			res.status(200).json(recordSet.recordset);
		})
	})
})





var server = app.listen(9000,function(){
	var host = server.address().address
    var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})