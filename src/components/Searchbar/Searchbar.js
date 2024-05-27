import { useState, useRef, forwardRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faBullseye, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

import * as searchServices from '~/features/searchService';

import IconButton from '../IconButton';
import { LocationIcon } from '../Icons';
import { useDebounce } from '~/hooks';
import { getAddressFromCoordinates } from '~/api/geocoding';
import config from '~/config';

const Searchbar = forwardRef(function Searchbar({}, ref) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [address, setAddress] = useState(() => {
        return JSON.parse(localStorage.getItem('userAddress')) || '';
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const locationRouter = useLocation();

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
        setAddress('');
        localStorage.removeItem('userAddress');
        ref.current?.focus();
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setQuery(inputValue);
        }
    };

    const handleGetUserPosition = () => {
        setQuery('');
        setSuggestions([]);
        setLoading(true);
        setError(null);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await getAddressFromCoordinates(latitude, longitude);
                        const address = response.results[0]?.formatted || 'Không tìm thấy địa chỉ';
                        setAddress(address);
                        localStorage.setItem('userAddress', JSON.stringify(address));
                    } catch (err) {
                        setError('Không thể lấy địa chỉ');
                    } finally {
                        setLoading(false);
                    }
                },
                (geoError) => {
                    setError('Không thể truy cập vị trí của bạn');
                    setLoading(false);
                    console.log(geoError);
                },
            );
        } else {
            setError('Trình duyệt của bạn không hỗ trợ Geolocation');
            setLoading(false);
        }
    };

    const handleAddressSelect = (location) => {
        localStorage.setItem('userAddress', JSON.stringify(location));
        if (locationRouter.pathname === config.routes.restaurants) locationRouter.reload();
    };
    return (
        // <div>
        <HeadlessTippy
            interactive
            visible={showResult && suggestions.length > 0}
            render={(attrs) => (
                <div
                    className="max-w-[544px] w-[544px] 2xl:mx-40 xl:mx-32 lg:mx-28 sm:mx-8 max-[639px]:mx-2 py-2 flex-shrink bg-light-surface-container-lowest rounded-lg shadow-[0_2px_6px_2px_rgba(0,0,0,0.15),_0_1px_2px_0_rgba(0,0,0,0.3)] divide-y divide-light-outline-variant"
                    tabIndex="-1"
                    {...attrs}
                >
                    {suggestions.map((location) => (
                        <Link
                            to={config.routes.restaurants}
                            className="inline-flex py-2 w-full max-w-[544px]  hover:bg-light-on-surface/8"
                            onClick={() => handleAddressSelect(location.formatted)}
                        >
                            <p className="mx-2 text-light-on-surface text-pretty"> {location.formatted}</p>
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
                        ref={ref}
                        type="text"
                        value={query || address}
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
                    {(!!query || !!address) && !loading && <IconButton icon={faCircleXmark} onClick={handleClear} />}
                    {loading && <IconButton className="animate-spin" icon={faSpinner} />}
                    <IconButton
                        onClick={handleGetUserPosition}
                        icon={faBullseye}
                        className="text-light-secondary-container"
                    />
                </div>
            </div>
        </HeadlessTippy>
        // </div>
    );
});

export default Searchbar;
