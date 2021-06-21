
//reportChoose.value = 'Report' ;
const reportUrl ="/ZAP_API_Report";
const reportDisplay = document.querySelector('pre');




function getReportUrl(reportUrl) {

fetch(reportUrl)
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var report = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;
        reportDisplay.textContent = html;
        console.log(html);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
//fetch(reportUrl).then(function(response) {
 // response.html().then(function(text) {
 //   reportDisplay.textContent = html;
 // });
//});
}


