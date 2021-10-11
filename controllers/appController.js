exports.app = (req, res) => {

    var Airtable = require('airtable');
    var base = new Airtable({
        apiKey: 'key0KdSnwdsofQz4R'
    }).base('appyrWJTLrVDtTCF6');

    base('Design projects').find('recyGmGkDzfVNeIQM', function (err, record) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Retrieved', record.fields.Name);
    });
    res.sendfile('public/html/app.html');

};