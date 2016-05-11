var restful = require('restful')
var fetch = require('whatwg-fetch')
var fetchBackend = fetch.fetchBackend

const api = restful('http://localhost:9090', fetchBackend(fetch));

const examCollection = api.all('exams');
