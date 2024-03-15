import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
function Button({
    title,
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    text = false,
    className: customClass,
}) {
    var classes = `
    inline-flex h-10 px-5 py-2 justify-center items-center rounded-full text-sm gap-2 font-medium
    `;

    if (primary) {
        classes +=
            ' bg-light-primary text-light-on-primary hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]';
    }
    if (outline) {
        classes += ' text-light-primary border border-light-outline hover:bg-light-primary/8';
    }
    if (text) {
        classes += ' text-light-primary hover:bg-light-primary/8';
    }
    if (customClass) {
        classes += ` ${customClass}`;
    }

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
    leftIcon: PropTypes.object,
};
export default Button;
