import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState, useTransition } from 'react';

import config from '~/config';
import images from '~/assets/img';
import DropdownMenu from '~/components/DropdownMenu';
import Button from '~/components/Button';
import IconButton from '~/components/IconButton';

function Header({ hide: customHide = false, breakPointTransition }) {
    const [isHide, startTransition] = useTransition();
    const [hide, setHide] = useState(customHide);
    if (customHide) {
        const handleScroll = () => {
            startTransition(() => {
                if (document.documentElement.scrollTop > breakPointTransition / 2) {
                    setHide(false);
                } else {
                    setHide(true);
                }
            });
        };

        window.onscroll = function () {
            handleScroll();
        };
    }
    console.log('Scrolling');

    return (
        <>
            {hide ? (
                <header className="fixed px-40 h-32 w-full top-0 py-1 flex items-center justify-between space-x-5 bg-transparent will-change-scroll transition-colors ease-out">
                    <Link to={config.routes.home}>
                        <img className="shrink h-auto max-w-full w-36" src={images.logo} alt="VegFoLos" />
                    </Link>
                </header>
            ) : (
                <header className="fixed px-40 h-32 w-full top-0 py-1 flex items-center justify-between space-x-5 bg-white shadow-md will-change-scroll transition-colors ease-in ">
                    <Link to={config.routes.home}>
                        <img className="shrink h-auto max-w-full w-36" src={images.logo} alt="VegFoLos" />
                    </Link>

                    {/* Searchbar */}
                    <div className="shrink-0 flex justify-between items-center max-w-xl w-full h-14 border rounded-full border-black border-solid px-4 space-x-5 focus-within:border-2 focus-within:border-green-600 transition">
                        <div className="flex flex-row items-center w-full">
                            <FontAwesomeIcon className="w-6 h-6 text-green-600" icon={faLocationDot} />
                            <input
                                className="text-sm font-normal text-black ml-5 outline-none w-full appearance-none"
                                placeholder="Enter delivery address"
                            />
                        </div>
                        <FontAwesomeIcon className="w-6 h-6 text-green-600" icon={faBullseye} />
                    </div>
                    <div className="inline-flex items-center space-x-3 flex-shrink-0">
                        <Button title="News" />
                        <Button title="Login" />
                        <IconButton icon={faCartShopping} />
                        <DropdownMenu />
                    </div>
                </header>
            )}
        </>
    );
}

export default Header;
