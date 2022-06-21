const users_structure = {
    type: 'object',
    properties:{
        userId:{type: 'integer'},
        name:{type: 'string'},
        designation:{type: 'string'},
        onboarded:{type: 'boolean'},
        height:{type: 'number'},
    }
}

module.exports = users_structure;