(function () {
'use strict';

const axios = require('axios');

let query = 'Auckland,nz';

const apiKey = '1f44f25862b9c48cdcc9e2d699a1a9e4';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey;

axios.get(url)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
//

}());
