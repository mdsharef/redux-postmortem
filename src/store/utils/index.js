const validateDispatch = (action) => {
    if(!action || typeof action !== 'object' || Array.isArray(action) === true) throw new Error('Action must be an object!');
    if(!action.type) throw new Error('Action must have a property named type!')
}

export default validateDispatch;