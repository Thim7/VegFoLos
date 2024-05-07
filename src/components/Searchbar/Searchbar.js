import { useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faBullseye, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/features/searchService';

import IconButton from '../IconButton';
import { LocationIcon } from '../Icons';
import { useDebounce } from '~/hooks';
import { Link } from 'react-router-dom';

function Searchbar() {
    // const [location, setLocation] = useState(null);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleFetchApi = () => {
        if (!query.trim()) {
            setSuggestions([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const results = await searchServices.search(query);
            setSuggestions(results);

            setLoading(false);
        };

        fetchApi();
    };

    useDebounce(handleFetchApi, 700, [query]);

    const handleClear = () => {
        setQuery('');
        setSuggestions([]);
        inputRef.current.focus();
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setQuery(inputValue);
        }
    };

    // const handleAddressSelect = (selectedLocation) => {
    //     setLocation(selectedLocation);
    //     setQuery(selectedLocation.place_name);
    //     toast.success(`Selected address: ${selectedLocation.place_name}`);
    // };

    return (
        // <div>
        <HeadlessTippy
            interactive
            visible={showResult && suggestions.length > 0}
            render={(attrs) => (
                <div
                    className="max-w-[544px] w-[544px] 2xl:mx-40 xl:mx-32 lg:mx-28 sm:mx-8 max-[639px]:mx-2 py-2 flex-shrink bg-light-surface-container-lowest rounded-lg shadow-[0_2px_6px_2px_rgba(0,0,0,0.15),_0_1px_2px_0_rgba(0,0,0,0.3)]"
                    tabIndex="-1"
                    {...attrs}
                >
                    {suggestions.map((place) => (
                        <Link
                            to={`/@${place.nickname}`}
                            key={place.id}
                            className="inline-flex py-2 w-full max-w-[544px]  hover:bg-light-on-surface/8"
                            // onClick={() => handleAddressSelect(place)}
                        >
                            <span className="ml-2 text-light-on-surface"> {place.full_name}</span>
                        </Link>
                    ))}
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className="shrink flex-1 flex justify-between items-center max-w-[544px] h-[52px] bg-light-surface-container-lowest border rounded-full border-black border-solid px-4 space-x-5 max-[640px]:space-x-2 focus-within:border-light-secondary-container transition">
                <div className="flex flex-row items-center w-full shrink">
                    <LocationIcon />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        spellCheck={false}
                        className="text-sm font-normal text-light-on-surface-variant ml-5 outline-none w-full bg-transparent"
                        placeholder="Enter delivery address"
                        onChange={handleInputChange}
                        onFocus={(e) => {
                            e.preventDefault();
                            setShowResult(true);
                        }}
                    />
                </div>
                <div className="inline-flex items-center">
                    {!!query && !loading && <IconButton icon={faCircleXmark} onClick={handleClear} />}
                    {loading && <IconButton className="animate-spin" icon={faSpinner} />}
                    <IconButton icon={faBullseye} className="text-light-secondary-container" />
                </div>
            </div>
        </HeadlessTippy>
        // </div>
    );
}

export default Searchbar;
