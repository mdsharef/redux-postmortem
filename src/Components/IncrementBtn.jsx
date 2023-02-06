import { useStoreActions } from "easy-peasy";

const IncrementBtn = () => {
    const { count, history } = useStoreActions(actions => actions);

    const handleClick = () => {
        count.increment(1);
        history.addHistory({
            action: 'increment',
            count: 1
        })
    };

    return (
        <div>
            <button onClick={handleClick}>+</button>
        </div>
    )
};

export default IncrementBtn;