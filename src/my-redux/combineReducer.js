const combineReducers = (reducers) => {
    const nextState = {};
    const reducerFunctions = {};

    const reducersKeys = Object.keys(reducers);
    reducersKeys.forEach(reducerKey => {
        if(typeof reducers[reducerKey] === 'function') {
            reducerFunctions[reducerKey] = reducers[reducerKey];
        }
    });

    const reducerFunctionsKeys = Object.keys(reducerFunctions);

    return (state={}, action) => {
        reducerFunctionsKeys.forEach(reducerKey => {
            const reducer = reducerFunctions[reducerKey];
            nextState[reducerKey] = reducer(state[reducerKey], action);
        });

        return nextState;
    };
};

export default combineReducers;