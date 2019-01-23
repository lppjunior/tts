# tts
TTS (Text To Speech Node File) Maker

This application is using **VOCALWARE API** to generate audio file.

To work properly, you need to acquire a Registration, [see more][vocalweb_url]

## Install
This is a node application.

First step is install dependencies:
```sh
$ npm install
```

Second step is change text.json, adding a list of text and your file name
```json
[
    { "file": "text_01", "text": "Exemplo de Texto 1 em português para geração do Áudio" },
    { "file": "text_02", "text": "Exemplo de Texto 2 em português, para geração do Áudio" }
]
```

Third step is run this application
```sh
$ npm start
```

The output files will be saved into '/files/' directory.

[vocalweb_url]: <https://www.vocalware.com/>