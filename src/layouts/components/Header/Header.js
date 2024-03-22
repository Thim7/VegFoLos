import { Link } from 'react-router-dom';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import config from '~/config';
import images from '~/assets/img';
import DropdownMenu from '~/components/DropdownMenu';
import Button from '~/components/Button';
import IconButton from '~/components/IconButton';
import Searchbar from '~/components/Searchbar';

function Header({ hide: customHide = false, breakPointTransition, isNews = false }) {
    // const [news,setNews] = useState(isNews);
    const [hide, setHide] = useState(customHide);
    if (customHide) {
        const handleScroll = () => {
            if (document.documentElement.scrollTop > breakPointTransition / 2) {
                setHide(false);
            } else {
                setHide(true);
            }
        };

        window.onscroll = function () {
            handleScroll();
        };
    }

    return (
        <>
            {hide ? (
                <header className=" w-screen md:w-full fixed 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 h-32 top-0 py-1 flex items-center justify-between space-x-5 max-[640px]:space-x-2 bg-transparent z-50 transition-colors ease-out">
                    <Link to={config.routes.home} className="shrink-0 max-[640px]:hidden">
                        <img className="h-auto max-w-full w-36 z-50" src={images.logo} alt="VegFoLos" />
                    </Link>
                    <div className="w-full"></div>
                </header>
            ) : (
                <header className="w-screen md:w-full fixed 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 h-32 top-0 py-1 flex items-center justify-between space-x-5 max-[640px]:space-x-2 bg-white shadow-md z-50 transition-colors ease-in ">
                    <Link to={config.routes.home} className="shrink-0 max-[640px]:hidden">
                        <img className="h-auto max-w-full w-36 z-50" src={images.logo} alt="VegFoLos" />
                    </Link>

                    <Searchbar />

                    <div className="inline-flex items-center space-x-3 shrink-0 lg:hidden">
                        <IconButton icon={faBars} />
                    </div>
                    <div className="lg:inline-flex items-center space-x-3 shrink-0 hidden">
                        {isNews ? (
                            <Button title="Home" outline to={config.routes.home} />
                        ) : (
                            <Button title="News" outline to={config.routes.news} />
                        )}
                        <Button title="Login" outline />
                        {isNews ? <></> : <IconButton icon={faCartShopping} outline />}
                        <DropdownMenu />
                    </div>
                </header>
            )}
        </>
    );
}

export default Header;
