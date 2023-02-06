import { useDispatch } from "react-redux";
import { addHistory, DECREMENT, decrement } from "../../store";

const DecrementBtn = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(decrement(1));
        dispatch(addHistory({action: DECREMENT, count: 1}))
    }

    return (
        <div>
            <button onClick={handleClick}>-</button>
        </div>
    )
};

export default DecrementBtn;