import { createContext } from "react"

const StoreContext = createContext(null);

const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
};

export default Provider;
export { StoreContext };