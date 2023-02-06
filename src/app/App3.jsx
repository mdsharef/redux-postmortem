import { useSelector } from "react-redux";
import Count from "../Components/CompForRedux/Count";
import DecrementBtn from "../Components/CompForRedux/DecrementBtn";
import HistoryItem from "../Components/CompForRedux/History";
import IncrementBtn from "../Components/CompForRedux/IncrementBtn";

const App = () => {
    const state = useSelector(state => state);

    console.log(state);

    return (
        <div>
            <Count />
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-start', 
                gap: '1rem'
            }}>
                <IncrementBtn />
                <DecrementBtn />
            </div>
            <HistoryItem />
        </div>
    )
};

export default App;