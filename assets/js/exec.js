#!/usr/bin/env node
var util  = require('util'),
//import exec from 'child_process';
process = require('child_process'),
ls    = process.exec('test.sh' , (error, stdout ,stderr) => {
console.log(stdout);
         console.log(stderr);
        if (error !== null) {
              console.log(`exec error: ${error}`),
{ stdio: 'inherit' }
});

ls.stdout.on('data', function (data) {
   console.log(data.toString());
   ls.stdin.write('test\n');
});






//const exec = require('child_process');
//var yourscript = exec('sh demo.sh',
 // (error, stdout, stderr) => {
      //   console.log(stdout);
        // console.log(stderr);
        //  if (error !== null) {
        //       console.log(`exec error: ${error}`);
        //  }
       // });
 //var args = " -d '{'title': 'Test' }' -H 'Content-Type: application/json' http://localhost:8090/JSON/openapi/action/importUrl/?zapapiformat=JSON&formMethod=GET&url=";

    //exec('curl ' + args, function (error, stdout, stderr) {
     // console.log('stdout: ' + stdout);
     // console.log('stderr: ' + stderr);
     // if (error !== null) {
        //console.log('exec error: ' + error);
     // }
    //});
   
       
