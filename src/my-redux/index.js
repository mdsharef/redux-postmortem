// import validateDispatch from "../store/utils";

const validateDispatch = (action) => {
    if(!action || typeof action !== 'object' || Array.isArray(action) === true) throw new Error('Action must be an object!');
    if(!action.type) throw new Error('Action must have a property named type!')
}

const createStore = (rootReducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        validateDispatch(action);
        state = rootReducer(state, action);
        listeners.forEach(listener => listener(state));
    }

    const subscribe = listener => {
        listeners.push(listener);
    }
    
    return {getState, dispatch, subscribe};
}

// export default createStore;





const reducer = (state={count: 5}, action) => {
    switch(action.type) {
        case "ADD":
            return {
                ...state,
                count: state.count + (action.payload ? action.payload : 1)
            }
            break;
        case "SUB":
            return {
                ...state,
                count: state.count - (action.payload ? action.payload : 1)
            }
            break;
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'ADD', payload: 5});
store.dispatch({type: 'SUB', payload: 3});
store.dispatch({type: 'create', payload: {name: 'English', price: 100}});
store.dispatch({type: 'create', payload: {name: 'Math', price: 50}});
store.dispatch({type: 'delete', payload: {name: 'English', price: 100}});
store.dispatch({type: 'TEXT'});