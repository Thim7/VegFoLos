import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
function Button({ title, leftIcon, rightIcon, primary = false, outline = false, className: customClass }) {
    var classes = `
    inline-flex h-10 px-5 py-2 justify-between items-center border rounded-full text-sm
    `;

    if (primary) {
        classes +=
            ' bg-light-primary text-light-on-primary hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]';
    }
    if (outline) {
        classes += 'text-light-primary border-light-outline hover:bg-light-primary/8 focus:bg-light-primary/12';
    }
    if (customClass) {
        classes += ` ${customClass}`;
    }

    console.log(classes);
    return (
        <button className={classes}>
            {leftIcon && <FontAwesomeIcon className="mr-2" icon={leftIcon} />}
            {title}
            {rightIcon && <FontAwesomeIcon className="ml-2" icon={rightIcon} />}
        </button>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    leftIcon: PropTypes.node,
};
export default Button;
