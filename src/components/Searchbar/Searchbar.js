import { faBullseye, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Searchbar() {
    return (
        <div className="shrink flex-1 flex justify-between items-center max-w-[544px] h-14 bg-light-surface-container-lowest border rounded-full border-black border-solid px-4 space-x-5 max-[640px]:space-x-2 focus-within:border-light-secondary-container transition">
            <div className="flex flex-row items-center w-full shrink">
                <FontAwesomeIcon className="w-6 h-6 text-light-secondary-container" icon={faLocationDot} />
                <input
                    className="text-sm font-normal text-light-on-surface-variant ml-5 outline-none w-full bg-transparent"
                    placeholder="Enter delivery address"
                />
            </div>
            <FontAwesomeIcon className="w-6 h-6 text-light-secondary-container" icon={faBullseye} />
        </div>
    );
}

export default Searchbar;
