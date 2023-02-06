import Count from "../Components/Count";
import DecrementBtn from "../Components/DecrementBtn";
import HistoryItem from "../Components/History";
import IncrementBtn from "../Components/IncrementBtn";


const App = () => {

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