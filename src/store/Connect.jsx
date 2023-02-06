import React from "react";
import { StoreContext } from "./Provider"

export default function Connect(Comp, mapStateToProps = (state) => state) {
    return class extends React.Component {
        static contextType = StoreContext;

        componentDidMount() {
            const store = this.context;
            const firstState = mapStateToProps(store.getState());
            this.setState(firstState);
            let stateChanged = false;
            store.subscribe((stateFromStore) => {
                const newState = mapStateToProps(stateFromStore);
                for (let key in newState) {
                    if (newState[key] != this.state[key]) {
                        stateChanged = true;
                        break;
                    }
                }
                stateChanged && this.setState(newState);
            });
        }

        render() {
            return <Comp {...this.state} />;
        }
    };
}