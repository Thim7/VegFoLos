import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function IconButton({ icon }) {
    return (
        <button className="flex justify-between items-center h-10 border border-light-outline rounded-full hover:bg-light-on-surface/8">
            <FontAwesomeIcon className="w-6 h-6 p-2 text-light-on-surface" icon={icon} />
        </button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.object.isRequired,
};
export default IconButton;
