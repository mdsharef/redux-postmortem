const validateDispatch = (action) => {
    if(!action || typeof action !== 'object' || Array.isArray(action) === true) throw new Error('Action must be an object!');
    if(!action.type) throw new Error('Action must have a property named type!')
}

const countReducer = (state={count: 5}, action) => {
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


const combineReducers = (reducers) => {
    const nextState = {};
    const reducerFunctions = {};

    const reducersKeys = Object.keys(reducers);

    console.log('nextState - ', nextState);
    console.log('reducersKeys - ', reducersKeys);

    reducersKeys.forEach(reducerKey => {
        if(typeof reducers[reducerKey] === 'function') {
            reducerFunctions[reducerKey] = reducers[reducerKey];
        }
    });

    console.log('reducerFunctions -', reducerFunctions);

    const reducerFunctionsKeys = Object.keys(reducerFunctions);

    console.log('reducerFunctionsKeys - ', reducerFunctionsKeys);

    return (state={}, action) => {
        reducerFunctionsKeys.forEach(reducerKey => {
            const reducer = reducerFunctions[reducerKey];
            console.log('reducer - ', reducer, 'reducerKey - ', reducerKey);
            nextState[reducerKey] = reducer(state[reducerKey], action);
            console.log('nextState - ', nextState);
        });

        return nextState;
    };
};

const historyReducer = (state=[], action) => {

    return state;
}

// const bookReducer = (state={}, action) => {
//     switch(action.type) {
//         case 'create':
//             return {
//                 ...state,
//                 [action.payload.name]: action.payload
//             }
//             break;
//         case 'delete':
//             delete state[action.payload.name]
//             return state;
//             break;
//         default:
//             return state;
//     }
// }

const bookReducer = (state={}, action) => {
    const obj = {
        create: () => {
            return {
                ...state,
                [action.payload.name]: action.payload
            }
        },
        delete: () => {
            delete state[action.payload.name]
            return state;
        }
    }

    if(obj[action.type]) {
        return obj[action.type]();
    } else {
        return state;
    }
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

const store = createStore(combineReducers({
    count: countReducer,
    history: historyReducer,
    book: bookReducer
}));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'ADD', payload: 5});
store.dispatch({type: 'SUB', payload: 3});
store.dispatch({type: 'create', payload: {name: 'English', price: 100}});
store.dispatch({type: 'create', payload: {name: 'Math', price: 50}});
store.dispatch({type: 'delete', payload: {name: 'English', price: 100}});
store.dispatch({type: 'create', payload: {name: 'ICT', price: 100}});
store.dispatch({type: 'TEXT'});