const { checkSchema } = require('express-validator');
const {validate} = require('./index')

const signup = [checkSchema({
    email : {
        isString: true,
        isEmail: true,
        isOptional:false
    },
    password : {
        isString: true,
        isOptional:false
    }
}), validate];

const login = [checkSchema({
    email : {
        isString: true,
        isOptional:false
    },
    password : {
        isString: true,
        isOptional:false
    }
}), validate];

const emailAvailability = [checkSchema({
    email : {
        isString: true,
        isEmail: true,
        isOptional:false
    }
}), validate];

module.exports = {
    login,
    signup,
    emailAvailability
}