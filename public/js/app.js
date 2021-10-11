'use strict'
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key0KdSnwdsofQz4R'}).base('appyrWJTLrVDtTCF6');

base('Design projects').select({
    
    
    view: "All projects"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    let myList = document.createElement('ul');
    records.forEach(function(record) {
        let listItem = document.createElement('li');
        listItem.textContent = record.fields.Name + " ---- " + record.id  ;
        myList.appendChild(listItem);
        console.log('Retrieved', record.id);
    });
    document.getElementById('Ex1').appendChild(myList);

}, function done(err) {
    if (err) { console.error(err); return; }
});



    // let MyList = document.createElement('ul');
    // const listItem = document.createElement('li');
    // listItem.textContent = record.id;
    // MyList.appendChild(listItem);
    // document.getElementById('Ex1').appendChild(MyList);