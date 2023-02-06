import { ReduxContext } from "./connect";

const Provider = ({ store, children }) => (
    <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

export default Provider;