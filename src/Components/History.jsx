import { useStoreActions, useStoreState } from "easy-peasy";

const HistoryItem = () => {
    const {items: historyArr} = useStoreState(state => state.history);
    const {clearHistory} = useStoreActions(actions => actions.history);

    return (
        <div>
            <h3>Histories - <button onClick={() => clearHistory()}>Clear Histories</button></h3>
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