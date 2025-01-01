import PropTypes from "prop-types";

function Message({ children }) {
    return (
        <div>{children}</div>
    )
}

export default Message

Message.propTypes = {
    children: PropTypes.node.isRequired,
};