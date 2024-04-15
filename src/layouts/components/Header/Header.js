import { Link } from 'react-router-dom';
import { useState } from 'react';

import config from '~/config';
import images from '~/assets/img';
import DropdownMenu from '~/components/DropdownMenu';
import Button from '~/components/Button';
import Searchbar from '~/components/Searchbar';
import { IconButton } from '@material-tailwind/react';
import { BagIcon, BarsIcon } from '~/components/Icons';
import DrawerCustom from '~/components/DrawerCustom';

const menuItems = ['EN (English)', 'VI (Vietnamese)'];

function Header({ hide: customHide = false, breakPointTransition, isNews = false, className: customClassName }) {
    const [hide, setHide] = useState(customHide);
    const [isOpenDrawer, setOpenDrawer] = useState(false);

    const openDrawer = () => {
        setOpenDrawer(true);
        document.body.classList.add('overflow-hidden');
    };
    const closeDrawer = () => {
        setOpenDrawer(false);
        document.body.classList.remove('overflow-hidden');
    };

    var classes =
        'w-screen md:w-full fixed 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 h-32 top-0 py-1 flex items-center justify-between space-x-5 max-[640px]:space-x-2 bg-white shadow-md z-50 transition-colors ease-in';
    if (customClassName) {
        classes += ` ${customClassName}`;
    }
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

    const positionApp = document.getElementsByClassName('App');

    return (
        <>
            {hide ? (
                <header className="w-screen md:w-full fixed 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 h-32 top-0 py-1 flex items-center justify-between space-x-5 max-[640px]:space-x-2 bg-transparent z-50 transition-colors ease-out">
                    <Link to={config.routes.home} className="shrink-0 max-[640px]:hidden">
                        <img className="h-auto max-w-full w-36 z-50" src={images.logo} alt="VegFoLos" />
                    </Link>
                    <div className="w-full"></div>
                </header>
            ) : (
                <>
                    <header className={classes}>
                        <Link to={config.routes.home} className="shrink-0 max-[640px]:hidden">
                            <img className="h-auto max-w-full w-36 z-50" src={images.logo} alt="VegFoLos" />
                        </Link>

                        <Searchbar />

                        <div className="inline-flex items-center space-x-3 shrink-0 lg:hidden">
                            <IconButton
                                ripple
                                className="rounded-full bg-light-surface-container-high"
                                variant="filled"
                                size="lg"
                            >
                                <BarsIcon />
                            </IconButton>
                        </div>
                        <div className="lg:inline-flex items-center space-x-3 shrink-0 hidden">
                            {isNews ? (
                                <Button title="Home" outline to={config.routes.home} />
                            ) : (
                                <Button title="News" outline to={config.routes.news} />
                            )}
                            <Button title="Login" outline />
                            {isNews ? (
                                <></>
                            ) : (
                                <DrawerCustom
                                    ripple
                                    variant="outlined"
                                    className="rounded-full hover:bg-light-primary/8 border-light-outline "
                                    icon={<BagIcon />}
                                    openDrawer={openDrawer}
                                    closeDrawer={closeDrawer}
                                    isOpenDrawer={isOpenDrawer}
                                    isCartBtn
                                />
                            )}
                            <DropdownMenu menuItems={menuItems} title="EN" />
                        </div>
                    </header>
                    {/* {isOpenDrawer && <div className="w-full h-full fixed z-50 bg-light-green-200"></div>} */}
                </>
            )}
        </>
    );
}

export default Header;
