'use strict'

const req = new XMLHttpRequest;
req.open('get', '/data');
req.responseType = 'json';
req.send();

req.onload = () => {
    const data = req.response;
    console.log(data);

    let MyList = document.createElement('ul');
    MyList.id = 'List';
    document.getElementById('Ex1').appendChild(MyList);
    data.forEach(element => {
        console.log(element.ID);
        const ListItem = document.createElement('li');
        ListItem.textContent = element.ID;
        document.getElementById('List').appendChild(ListItem);
    });
    
};
