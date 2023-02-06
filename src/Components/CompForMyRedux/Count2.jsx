import connect from "../../my-redux/connect";


const Count = (props) => {
    return (
        <div>
            <h3>
                Count: {props.count}
            </h3>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count);