import { action, createStore } from "easy-peasy";

let id = 0;

function generateID() {
    return id++;
}

const counterModel = {
    value: 0,
    increment: action((state, payload) => state.value += payload),
    decrement: action((state, payload) => state.value -= payload)
};

const historyModel = {
    items: [],
    addHistory: action((state, payload) => {
        state.items.push({
            id: generateID(),
            action: payload.action,
            count: payload.count,
            time: new Date(),
        });
    }),
    clearHistory: action((state, payload) => state.items = []),
}

const store = createStore({
    count: counterModel,
    history: historyModel,
});

export default store;