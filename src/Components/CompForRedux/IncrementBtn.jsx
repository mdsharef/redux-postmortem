import { useDispatch } from "react-redux";
import { addHistory, INCREMENT, increment } from "../../store";

const IncrementBtn = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(increment(1));
        dispatch(addHistory({action: INCREMENT, count: 1}))
    }

    return (
        <div>
            <button onClick={handleClick}>+</button>
        </div>
    )
};

export default IncrementBtn;