import Button from "../Components/Button";
import Count from "../Components/Count";
import createStore from "../my-redux";
import Provider from "../my-redux/Provider";
import reducer from "../store/reducer";

const App = () => {
    const store = createStore({count: 0} ,reducer);

    return (
        <Provider store={store}>
            <div>
                <Count />
                <Button />
            </div>
        </Provider>
    )
};

export default App;