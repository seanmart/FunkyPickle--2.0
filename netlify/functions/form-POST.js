const Airtable = require('airtable')

const headers = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers": "Content-Type",
  };

exports.handler = async function (event, context) {
	
  if (event.httpMethod === "OPTIONS"){
	  return {statusCode:200, headers};
  }
  
  const params = JSON.parse(event.body)
  let records = null
	
  if(params.fields && params.base && params.table && params.view){
	  const base = new Airtable({apiKey: process.env.AIRTABLE_ACCESS_TOKEN}).base(params.base);
	  records = await base(params.table).create([{fields:params.fields}])  
  }
  
  return{
		statusCode: records ? 200 : 404,
		body: JSON.stringify(!!records)
	}
  
};