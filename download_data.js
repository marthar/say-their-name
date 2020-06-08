'use strict';

const fs = require('fs');

const Tabletop = require("tabletop");

const fetch = require('node-fetch');


var headers = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36"
}

const retrieveStatus = async (url) => {
  try {
    const res = await fetch(url, { headers: headers });
    const { status } = res; 
    return status;
  } catch (err) {
    return err.message
  }
}

 Tabletop.init( {
  key: 'https://docs.google.com/spreadsheets/d/1ZWIpWwkm5C0pERHiRkmHsYTmReG4F3KC38ofquCLJZY/edit?usp=sharing',
  simpleSheet: true }
).then(function(data, tabletop) { 
  let str = JSON.stringify(data);
  fs.writeFileSync('public/names.json', str);


  for(var i = 0; i < data.length; i++) { 
    ((entry,i) => { 
      setTimeout(() => {
	if(entry.article != '') {
	        retrieveStatus(entry.article).then((status) => {
        	  if(status != 200) {
	            console.log(`BAD URL: ROW${i+2} ${entry.name} "${status}" - ${entry.article}`)
	          }
		})
        	}
       }, Math.random(120000));
    })(data[i],i)
  }
});
