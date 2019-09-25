const respondJSON = (request, response, status, object) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    response.writeHead(status, headers);
    response.write(JSON.stringify(object));
    response.end();
};


const respondXML = (request, response, status, object) => {
    const headers = {
        'Content-Type': 'text/xml',
    }

    response.writeHead(status, headers);
    response.write(object);
    response.end();
};

const getUsers = (request, response) => {
    
};

const notReal = (request, response) => {
    
};


const success = (request, response) => {
    const responseJSON = {
        message: 'This is a successful response',
    };
    if (request.headers.accept === 'text/xml') {
        let responseXML = '<response>';
        responseXML = `${responseXML} <message>This is a successful response</message>`;
        responseXML = `${responseXML} </response>`;  
        
        return respondXML(request, response, 200, responseXML);
    }
    

    return respondJSON(request, response, 200, responseJSON);
};

const unauthorized = (request, response, params) => {
    const responseJSON = {
        message: 'This is a unauthorized response',
        id: 'unauthorized',
    };
    
    if(params.loggedIn || params.loggedIn !== true){
        responseJSON.message = 'Missing loggedIn query parameter set to true';
        responseJSON.id = 'unauthorized';
        
        if (request.headers.accept === 'text/xml') {
            let responseXML = '<response>';
            responseXML = `${responseXML} <message>This is an unauthorized response</message>`;
            responseXML = `${responseXML} <id>unauthorized</id>`;
            responseXML = `${responseXML} </response>`;  

            return respondXML(request, response, 401, responseXML);
        }
        
        return respondJSON(request, response, 401, responseJSON);
    }
    
    if (request.headers.accept === 'text/xml') {
        let responseXML = '<response>';
        responseXML = `${responseXML} <message>This is an unauthorized response</message>`;
        responseXML = `${responseXML} </response>`;  
        
        return respondXML(request, response, 401, responseXML);
    }

    return respondJSON(request, response, 401, responseJSON);
};

const forbidden = (request, response) => {
    const responseJSON = {
        message: 'This is a forbidden response',
    };
    
    if (request.headers.accept === 'text/xml') {
        let responseXML = '<response>';
        responseXML = `${responseXML} <message>This is a forbidden response</message>`;
        responseXML = `${responseXML} </response>`;  
        
        return respondXML(request, response, 403, responseXML);
    }

    return respondJSON(request, response, 403, responseJSON);
};

const internal = (request, response) => {
    const responseJSON = {
        message: 'This is a internal response',
    };
    
    if (request.headers.accept === 'text/xml') {
        let responseXML = '<response>';
        responseXML = `${responseXML} <message>This is an internal response</message>`;
        responseXML = `${responseXML} </response>`;  
        
        return respondXML(request, response, 500, responseXML);
    }

    return respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response) => {
    const responseJSON = {
        message: 'This is not implemented',
        id: 'notImplemented',
    };
    
    if (request.headers.accept === 'text/xml') {
        let responseXML = '<response>';
        responseXML = `${responseXML} <message>This is not implemented</message>`;
        responseXML = `${responseXML} <id>notImplemented</id>`;
        responseXML = `${responseXML} </response>`;  
        
        return respondXML(request, response, 501, responseXML);
    }

    return respondJSON(request, response, 501, responseJSON);
};

const badRequest = (request, response, params) => {
    const responseJSON = {
        message: 'This request does not have the required parameters',
    };
    
    if (!params.valid || params.valid !== true){
        responseJSON.message = 'Missing valid query parameter set to true';
        responseJSON.id = 'badRequest';
        if (request.headers.accept === 'text/xml') {
            let responseXML = '<response>';
            responseXML = `${responseXML} <message>This is an unauthorized response</message>`;
            responseXML = `${responseXML} <id>badRequest</id>`;
            responseXML = `${responseXML} </response>`;  

            return respondXML(request, response, 401, responseXML);
        }
        
        return respondJSON(request, response, 400, responseJSON);
    }
    
    if (request.headers.accept === 'text/xml') {
        let responseXML = '<response>';
        responseXML = `${responseXML} <message>This is not implemented</message>`;
        responseXML = `${responseXML} </response>`;  
        
        return respondXML(request, response, 200, responseXML);
    }
    
    return respondJSON(request, response, 200, responseJSON);
};

const notFound = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for is not found.',
        id: 'notFound',
    }
    if (request.headers.accept === 'text/xml') {
        let responseXML = '<response>';
        responseXML = `${responseXML} <message>This is not the page you are looking for.</message>`;
        responseXML = `${responseXML} <id>notFound</id>`;
        responseXML = `${responseXML} </response>`;  
        
        return respondXML(request, response, 404, responseXML);
    }

    return respondJSON(request, response, 404, responseJSON);
};

module.exports = {
    success,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    internal,
    notImplemented,
    notFound,
};
