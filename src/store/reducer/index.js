const reducer = (state, action) => {
    switch(action.type) {
        case 'Increase_Num':
            return {...state, count: state.count + action.payload}
            break;
        case 'Decrease_Num':
            return {...state, count: state.count - action.payload}
            break;
        default:
            return {...state}
    }
}

export default reducer;