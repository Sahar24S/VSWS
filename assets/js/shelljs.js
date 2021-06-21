var shell = require('shelljs');
//const { promisify } = require('util')
//const sleep = promisify(setTimeout)
//var fetch  = require('./fetch.js');
//var fs = require('fs');
var file='../../../swagger.json';
//var contents = fs.readFileSync(file, 'utf8');
var domain="https://petstore.swagger.io/v2/";
//url= fetch.api_url;
//async function startScan(url , file){

shell.exec('echo  Starting.....');
shell.exec('../../../.././ZAP_2.10.0_Linux/ZAP_2.10.0/zap.sh  -daemon');
console.log("Wait 80 seconds to start Scanninng")

shell.exec('curl "http://localhost:8090/JSON/openapi/action/importFile/?file="' + file + ' "&target="' + domain);

//sleep(1000).then(() => {
  console.log("import the Api Definition");
  shell.exec('curl "http://localhost:8090/JSON/ascan/action/scan/?zapapiformat=JSON&formMethod=GET&url="+  domain+ "/&recurse=&inScopeOnly=&scanPolicyName=&method=&postData=&contextId="');
  
 // });

//sleep(6000).then(() => {

  console.log("Wait for 60 sec to complete the Scan before generating the testing report");
  shell.exec('curl "http://localhost:8090/OTHER/core/other/jsonreport/?formMethod=GET" >Vulnerbility_Report.json');
  
 // });


shell.exec('curl "http://localhost:8090/JSON/core/action/shutdown/?zapapiformat=JSON&formMethod=GET"');

//}

//module.exports = {startScan};

