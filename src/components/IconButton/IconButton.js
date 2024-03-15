import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function IconButton({ icon, outline = false }) {
    var classes = `flex justify-center items-center h-10 rounded-full hover:bg-light-on-surface/8`;

    if (outline) {
        classes += ' border border-light-outline';
    }
    return (
        <button className={classes}>
            <FontAwesomeIcon className="w-6 h-6 p-2 text-light-on-surface" icon={icon} />
        </button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.object.isRequired,
};
export default IconButton;
