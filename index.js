const fs = require('fs');
const API = require('./src/api/TTSApi.js');
const textList = require("./text.json");

const DIR = 'files/';

if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
}

textList.forEach(soundObj => {
    API.textToAudioFile({
        text: soundObj.text,
        language: 6,
        voice: 3,
        output: DIR + soundObj.file + '.mp3'
    });
});