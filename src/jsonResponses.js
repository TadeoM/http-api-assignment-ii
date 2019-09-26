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

    return respondJSON(request, response, 404, responseJSON);
};

const notRealMeta = (request, response) => {
    return respondJSONMeta(request, response, 404);
};

const addUser = (request, response, params) => {
    const responseJSON = {
        message: '',
    }
    if (!params.name || !params.age) {
        responseJSON.message = 'Missing params name and/or age.';
        return respondJSON(request, response, 400, responseJSON.message);
    }

    
    const newUser = {
        name: params.name,
        age: params.age,
    };

    if (users.hasOwnProperty(newUser.name)) {
        
        users[newUser.name].age = newUser.age;
        responseJSON.message = `Updated user.`
        
        return respondJSON(request,response, 204, newUser);
    }
    
    
    users[newUser.name] = {};
    users[newUser.name].name = newUser.name;
    users[newUser.name].age = newUser.age;
    responseJSON.message = `Created new user.`;

    return respondJSON(request, response, 201, responseJSON);
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
    notImplemented,*/
    notFound,
};
