import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../store";

const HistoryItem = () => {
    const historyArr = useSelector(state => state.history);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Histories - <button onClick={() => dispatch(clearHistory())}>Clear Histories</button></h3>
            {historyArr.length > 0 && (
                <>
                    {historyArr.map(hr => (
                        <div key={hr.id} style={{
                            border: '2px solid #222', 
                            padding: '10px', 
                            marginBottom: '10px',
                        }}>
                            <h4>Action - {hr.action}</h4>
                            <p>Count - {hr.count}</p>
                            <small>Time: - {JSON.stringify(hr.time)}</small>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
};

export default HistoryItem;