const querystring = require('querystring');

function jsonToQuerystring(json) {
    return '?' + Object.keys(json).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
}

function getEncodedText(text) {
    return querystring.stringify({ encodedTemplate: text }).replace('encodedTemplate=', '');
}

module.exports = {
    jsonToQuerystring,
    getEncodedText
};
