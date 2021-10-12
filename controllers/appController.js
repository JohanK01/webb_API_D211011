exports.app = (req, res) => {

    res.sendfile('public/html/app.html');

};

exports.data = (req, res) => {

    let list = [];


    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'key0KdSnwdsofQz4R'}).base('appyrWJTLrVDtTCF6');

base('Design projects').select({
    // Selecting the first 3 records in All projects:
    
    view: "All projects"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        const id = record.id;

        list.push({
            "ID": id
        });



        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
    
}, function done(err) {
    if (err) { console.error(err); return; }
    res.send(JSON.stringify(list));
});

 
}