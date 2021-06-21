//var command = require('./commands');
//const startScan = require("./report.js");
var shell = require('shelljs');
document.getElementById("scanButton").onclick = function() {myFunction()};
 function myFunction(){
// api url
//var start= require('./shelljs');
//var api_url="www.googlear.com"; 
const api_url= document.getElementById('url').value;
const file =document.getElementById('file').value;
document.getElementById("ms").innerHtml= file;
//var file= "lllk/documents/swafjg";
startScan(api_url, file);

}

 function startScan(url , file){
 var domain= "https://petstore.swagger.io/v2";
var document="/home/swagger.json";
     domain= url;
    document= file;
    console.log(apiUrl + document);
    report(document);
    shell.exec('echo  Starting.....');
shell.exec('../../../.././ZAP_2.10.0_Linux/ZAP_2.10.0/zap.sh  -daemon');
console.log("Wait 80 seconds to start Scanninng")

shell.exec('curl "http://localhost:8090/JSON/openapi/action/importFile/?file="' + document +  ' "&target="' + domain);

//sleep(1000).then(() => {
  console.log("import the Api Definition");
  shell.exec('curl "http://localhost:8090/JSON/ascan/action/scan/?zapapiformat=JSON&formMethod=GET&url="+  domain+ "/&recurse=&inScopeOnly=&scanPolicyName=&method=&postData=&contextId="');
  
 // });

//sleep(6000).then(() => {

  console.log("Wait for 60 sec to complete the Scan before generating the testing report");
  shell.exec('curl "http://localhost:8090/OTHER/core/other/jsonreport/?formMethod=GET" >Vulnerbility_Report.json');
  
 // });


shell.exec('curl "http://localhost:8090/JSON/core/action/shutdown/?zapapiformat=JSON&formMethod=GET"');


}


//module.exports= report;
