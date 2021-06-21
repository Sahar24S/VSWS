#!/bin/bash

#Variable
#url= "http://demo.testfire.net/"
domain="https://www.hackthissite.org/"
#domain="http://hackazon.webscantest.com/"

#kill processes if already using port 8090
#sudo kill -9 $(sudo lsof -t -i:8090)
kill -9 $(lsof -t -i:8090)


echo start the ZAP in daemon mode
 

$(x-terminal-emulator -e "bash -c ' .././ZAP_2.10.0_Linux/ZAP_2.10.0/zap.sh -daemon'")
 
echo Wait for 80 sec until zap is started
sleep 80

#echo the status of ZAP
#curl http://localhsot:8090
 
echo spider scan for the web site
 
curl "http://localhost:8090/JSON/spider/action/scan/?zapapiformat=JSON&formMethod=GET&url=$domain"
 
 
 
echo Active Scan for the website
 
curl "http://localhost:8090/JSON/ascan/action/scan/?zapapiformat=JSON&formMethod=GET&url=$domain&recurse=&inScopeOnly=&scanPolicyName=&method=&postData=&contextId="
 
 
 
# Wait for 20 sec to complete the ActiveScan before generating the testing report

 
sleep 20
 
 
 
echo List the security assessments results , and output the report to ZAP_Report.HTML
 
curl "http://localhost:8090/JSON/ascan/view/status/"
 
curl "http://localhost:8090/HTML/core/view/alerts/"
 
curl "http://localhost:8090/OTHER/core/other/htmlreport/?formMethod=GET" >ZAP_Report.HTML
 
 
 
#shutdown the ZAP
 
curl “http://localhost:8090/JSON/core/action/shutdown/?zapapiformat=JSON&formMethod=GET”
