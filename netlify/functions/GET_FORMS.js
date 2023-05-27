const Axios = require('axios')
const headers = {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "Content-Type"};

exports.handler = async function (event, context) {
  if (event.httpMethod === "OPTIONS"){
	  return {statusCode:200, headers};
  }
  
  const {base} = JSON.parse(event.body)
  
  if(base){
	  
	const url = `https://api.airtable.com/v0/meta/bases/${base}/tables`
	const config = {headers:{"Authorization": `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`}}
	const res = await Axios.get(url,config)
	
	if (res.data){
		return {
			statusCode: 200,
			body: JSON.stringify(res.data.tables)
		}
	}
  }
  
  return {
	  statusCode: 200
  }
  
};