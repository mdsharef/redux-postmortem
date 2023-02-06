import { useSelector } from "react-redux";

const Count = () => {
    const count = useSelector(state => state.count);

    return (
        <div>
            <h3>Count: {count}</h3>
        </div>
    )
}

export default Count;