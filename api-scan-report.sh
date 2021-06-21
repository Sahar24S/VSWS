#!/bin/bash

domain="https://petstore.swagger.io/v2"
file='/home/sahar/swagger.json'

#kill processes if already using port 8090

kill -9 $(lsof -t -i:8090)

echo start the ZAP in daemon mode
 

$(x-terminal-emulator -e "bash -c ' ../.././ZAP_2.10.0_Linux/ZAP_2.10.0/zap.sh -daemon'")
 
echo Wait for 80 sec until zap is started
sleep 80

#echo the status of ZAP
#curl http://localhsot:8090
 
echo import the Api Definition
 
#curl "http://localhost:8090/JSON/openapi/action/importUrl/?zapapiformat=JSON&formMethod=GET&url=$domain/$file&hostOverride="
curl "http://localhost:8090/JSON/openapi/action/importFile/?file=$file&target=$domain"
#http://localhost:8090/JSON/openapi/action/importFile/?file=swagger.json&target=https%3A%2F%2Fpetstore.swagger.io%2Fv2
 
 #.././ZAP_2.10.0_Linux/ZAP_2.10.0/zap.sh  -cmd importUrl=$domain  
echo  Scaning Started... Wait 60 sec
 
curl "http://localhost:8090/JSON/ascan/action/scan/?zapapiformat=JSON&formMethod=GET&url=$domain/&recurse=&inScopeOnly=&scanPolicyName=&method=&postData=&contextId="
 
 
 
# Wait for 60 sec to complete the ActiveScan before generating the testing report

 
sleep 60
 
 
 
echo List the security assessments results , and output the report to Vulnerbility_Report.json
 
#curl "http://localhost:8090/JSON/ascan/view/status/"
 
#curl "http://localhost:8090/HTML/core/view/alerts/"
 
curl "http://localhost:8090/OTHER/core/other/jsonreport/?formMethod=GET" >Vulnerbility_Report.json
 
 
 
#shutdown the ZAP
 
curl “http://localhost:8090/JSON/core/action/shutdown/?zapapiformat=JSON&formMethod=GET”





