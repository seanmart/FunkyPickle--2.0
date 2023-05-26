const Axios = require('axios')

const headers = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers": "Content-Type",
  };

exports.handler = async function (event, context) {
  if (event.httpMethod === "OPTIONS"){
	  return {statusCode:200, headers};
  }
  
  let fields = null
  const params = JSON.parse(event.body)
  
  if(params.base && params.table && params.view){
	  
	const url = `https://api.airtable.com/v0/meta/bases/${params.base}/tables`
	const config = {headers:{"Authorization": `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`}}
	const res = await Axios.get(url,config)
	
	if (res.data){
		const table = res.data.tables.find(t => t.id = params.table)
		if(table) fields = table.fields
	}
  }
  
  return{
	  statusCode: fields ? 200 : 404,
	  body: JSON.stringify(fields)
  }
  
};