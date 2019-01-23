const request = require('request');
const fs = require('fs');
const { jsonToQuerystring } = require('../util/String.util');

const API = {
    url: 'https://cache-a.oddcast.com/tts/gen.php',
    parameters: {
        EID: 2, //
        LID: 111, // LANGUAGE
        VID: 111, // VOICE
        IS_UTF8: 1, //
        ACC: 3314795, //
        API: 2292376, //
        CB: 'vw_mc.vwCallback', //
        HTTP_ERR: 1, //
        vwApiVersion: 2, //
        TXT: '' //TEXT
    }
};

function makeUrl(text, language, voice) {
    const params = {
        ...API.parameters,
        LID: language,
        VID: voice,
        TXT: text
    };

    return API.url + jsonToQuerystring(params);
}

async function textToAudioFile( { text, language, voice, output} ) {
    const url = makeUrl(text, language, voice);

    request.get(url).pipe(fs.createWriteStream(output));
}

module.exports = {
    textToAudioFile
};