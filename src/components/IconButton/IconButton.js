import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function IconButton({ icon }) {
    return (
        <button className="flex justify-between items-center h-10 text-green-950 hover:bg-green-700/10 focus:bg-green-800/15 border border-green-800 rounded-full hover:bg-green-700/10 focus:bg-green-800/15">
            <FontAwesomeIcon className="w-6 h-6 p-2" icon={icon} />
        </button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.object.isRequired,
};
export default IconButton;
