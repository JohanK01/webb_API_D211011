'use strict'
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key0KdSnwdsofQz4R'}).base('appyrWJTLrVDtTCF6');

base('Design projects').select({
    
    
    view: "All projects"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.id);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    

}, function done(err) {
    if (err) { console.error(err); return; }
});



    // let MyList = document.createElement('ul');
    // const listItem = document.createElement('li');
    // listItem.textContent = record.id;
    // MyList.appendChild(listItem);
    // document.getElementById('Ex1').appendChild(MyList);