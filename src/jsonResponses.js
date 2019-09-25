const users = {};

const respondJSON = (request, response, status, object) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    response.writeHead(status, headers);
    response.write(JSON.stringify(object));
    response.end();
};

const respondJSONMeta = (request, response, status) => {
    const headers = {
        'Content-Type': 'application/json',
    }

    response.writeHead(status, headers);
    response.end();
};

const getUsers = (request, response) => {
    const responseJSON = {
        users,
    }

    return respondJSON(request, response, 200, responseJSON);
};

const getUsersMeta = (request, response) => {
    return respondJSONMeta(request, response, 200);
};

const notReal = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for was not found',
    }

    return responseJSON(request, response, 404, responseJSON);
};

const notRealMeta = (request, response) => {
    return respondJSONMeta(request, response, 404);
};

const addUser = (request, response, params) => {
    const responseJSON = {
        message: '',
    }
    if (!params.name || !param.age) {
        responseJSON.message = 'Missing params name and/or age.';
        return respondJSON(request, response, 400);
    }

    const newUser = {
        name: params[0],
        age: params[1],
    };

    if (users.includes(name)) {
        responseJSON.message = `Updated ${newUser.name}'s age to ${newUser.age}.`
        users[users.indexOf(name)].age = newUser.age;
        
        return responseJSON(request,response, 204, newUser);
    }
    
    responseJSON.message = `Created new user: ${newUser.name}, age: ${newUser.age}`;
    users[users.indexOf(name)].name = newUser.name;
    users[users.indexOf(name)].age = newUser.age;

    return respondJSON(request, response, 201, responseJSON);
};


/*const success = (request, response) => {
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
};*/

module.exports = {
    getUsers,
    getUsersMeta,
    notReal,
    notRealMeta,
    addUser,
    /*success,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    internal,
    notImplemented,
    notFound,*/
};
