const http = require('http');
const url = require('url');
const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    'GET': {
        '/': htmlHandler.getIndex,
        '/style.css': htmlHandler.getCSS,
        '/success': jsonHandler.success,
        '/badRequest': jsonHandler.badRequest,
        '/unauthorized': jsonHandler.unauthorized,
        '/forbidden': jsonHandler.forbidden,
        '/internal': jsonHandler.internal,
        '/notImplemented': jsonHandler.notImplemented,
        notFound: jsonHandler.notFound,
    },
    'HEAD': {
        //'/getUsers': jsonHandler.getUsersMeta,
        notFound: jsonHandler.notFound,
    },
};

const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);
    const params = query.parse(parsedUrl.query);

    if (urlStruct[request.method][parsedUrl.pathname]){
        urlStruct[request.method][parsedUrl.pathname](request,response, params);
    } else {
        urlStruct['HEAD'].notFound(request, response);
    }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);