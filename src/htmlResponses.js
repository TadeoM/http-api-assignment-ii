const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const indexCSS = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(index);
    response.end();
};

const getCSS = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/css'
    });
    response.write(indexCSS);
    response.end();
};
module.exports.getCSS = getCSS;
module.exports.getIndex = getIndex;

