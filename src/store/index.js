import reducer from "./reducer";
import validateDispatch from "./utils";

class CreateStore {
    constructor(reducer, initState={}) {
        this.state = initState;
        this.listeners = [];
        this.reducer = reducer;
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }
    dispatch(action) {
        validateDispatch(action);

        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener(this.state));
    }
    getState() {
        return this.state;
    }
}

const Store = new CreateStore(reducer, {count: 0})

export default Store;