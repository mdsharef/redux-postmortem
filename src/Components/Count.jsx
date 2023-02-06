import { useStoreState } from "easy-peasy";

const Count = () => {
    const {value} = useStoreState(state => state.count);

    return (
        <div>
            <h3>Count: {value}</h3>
        </div>
    )
}

export default Count;