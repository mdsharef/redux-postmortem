import connect from "../../my-redux/connect";

const Button = (props) => {
    return (
        <div>
            <button onClick={() => props.add()}>Increase</button>
            <button onClick={() => props.sub()}>Decrease</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch({type: "Increment_Num", paylaod: 2})
        },
        sub: () => {
            dispatch({type: "Decrease_Num", paylaod: 1})
        }
    }
}

export default connect(null, mapDispatchToProps)(Button);