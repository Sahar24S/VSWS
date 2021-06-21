//import fs library
const fs = require('fs');
//const api_url =document.getElementById(Url).value;
//const file =document.getElementById(file);
var file='../../../swagger.json';
var contents = fs.readFileSync(file, 'utf8');
console.log(contents);

 function evaluateCmd(userInput){
    const userInputArray = userInput.split(" "); 
            //slice(1) will slice the first letter and save the rest
           var print=  commandLibrary.echo(userInputArray);
           console.log(print);      
};
module.exports= {evaluateCmd} ;
//#kill processes if already using port 8090

//kill -9 $(lsof -t -i:8090)

//echo start the ZAP in daemon mode
 

//$(x-terminal-emulator -e "bash -c ' ../../../.././ZAP_2.10.0_Linux/ZAP_2.10.0/zap.sh  -daemon'")
 
//echo Wait for 80 sec until zap is started
//sleep 80

//#echo the status of ZAP
//#curl http://localhsot:8090
 
//echo import the Api Definition
 
//curl "http://localhost:8090/JSON/openapi/action/importUrl/?zapapiformat=JSON&formMethod=GET&url=$domain/$file&hostOverride="
//#curl "http://localhost:8090/UI/openapi/action/importFile/"
 
 
//echo Active Scan for the website
 
//curl "http://localhost:8090/JSON/ascan/action/scan/?zapapiformat=JSON&formMethod=GET&url=$domain/&recurse=&inScopeOnly=&scanPolicyName=&method=&postData=&contextId="
 
 
 
//# Wait for 60 sec to complete the ActiveScan before generating the testing report

 
//sleep 60
 
 
 
//echo List the security assessments results , and output the report to ZAP_API_Report.HTML
 
//curl "http://localhost:8090/JSON/ascan/view/status/"
 
//curl "http://localhost:8090/HTML/core/view/alerts/"
 
//curl "http://localhost:8090/OTHER/core/other/xmlreport/?formMethod=GET" >ZAP_API_Report.XML
 
 
 
//#shutdown the ZAP
 
//curl “http://localhost:8090/JSON/core/action/shutdown/?zapapiformat=JSON&formMethod=GET”





