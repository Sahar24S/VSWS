//const report = require("./fetch");


var apiUrl= "https://example.com";
var document="json";
 function startScan(url , file){
     apiUrl= url;
    document= file;
    console.log(apiUrl + document);
    report(document);
    

}
function report(file){
var document=file;
//var x = document.getElementById("ms");
//x.innerHtml= document;
 console.log("Fetched ...."+ document);
}
module.exports= startScan;
