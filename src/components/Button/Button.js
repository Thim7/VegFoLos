import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
function Button({ title, leftIcon }) {
    return (
        <button className="inline-flex h-10 px-5 py-2 justify-between items-center border border-green-800 rounded-full text-green-900 hover:bg-green-700/10 focus:bg-green-800/15">
            {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
            {title}
        </button>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    leftIcon: PropTypes.node,
};
export default Button;
