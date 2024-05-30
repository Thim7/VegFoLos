import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import axios from 'axios';

import config from '~/config';
import images from '~/assets/img';
import DropdownMenu from '~/components/DropdownMenu';
import Button from '~/components/Button';
import Searchbar from '~/components/Searchbar';
import { Avatar, IconButton, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { BagIcon, BarsIcon } from '~/components/Icons';
import DrawerCustom from '~/components/DrawerCustom';

// Selector

const menuItems = ['EN (English)', 'VI (Vietnamese)'];

function Header({
    hide: customHide = false,
    breakPointTransition,
    isNews = false,
    isLogin = false,
    isCheckout = false,
    className: customClassName,
}) {
    // let location = useLocation();
    const [hide, setHide] = useState(customHide);
    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authGoogleInfo')) || JSON.parse(localStorage.getItem('authFacebookInfo')),
    );
    const [profile, setProfile] = useState({});

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        if (user.type === 'google_login') {
            localStorage.removeItem('authGoogleInfo');
            googleLogout();
        } else if (user.type === 'facebook_login') {
            localStorage.removeItem('authFacebookInfo');
        }
        setProfile({});
    };
    const openDrawer = () => {
        setOpenDrawer(true);
        document.body.classList.add('overflow-hidden');
    };
    const closeDrawer = () => {
        setOpenDrawer(false);
        document.body.classList.remove('overflow-hidden');
    };

    // const totalPriceInCart = useSelector(getTotalPriceInCart);
    // const haveOrdersInCart = useSelector(getOrdersInCart);

    // const dispatch = useDispatch();

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

    // const positionApp = document.getElementsByClassName('App');

    useEffect(() => {
        if (user?.type === 'google_login') {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        } else if (user?.type === 'facebook_login') {
            setProfile(user);
        }
    }, [user]);
    useEffect(() => {
        const checkTime = setInterval(() => {
            if (user) if (Date.now() - user?.timeStart >= (user?.expires_in || user?.expiresIn)) logOut();
        }, 60000 * 3);

        return () => {
            clearInterval(checkTime);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {hide ? (
                <header className="w-screen md:w-full fixed 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 h-32 top-0 py-1 flex items-center justify-between space-x-5 max-[640px]:space-x-2 bg-transparent z-50 transition">
                    <Link to={config.routes.home} className="shrink-0 max-[640px]:hidden ">
                        <img className="h-auto max-w-full w-36 z-50 " src={images.logo} alt="VegFoLos" />
                    </Link>
                    <div className="w-full"></div>
                </header>
            ) : (
                <>
                    <header
                        className={`dark:bg-dark-surface-container-lowest bg-light-surface-container-lowest ${classes} transition dark:border-b dark:border-dark-outline-variant`}
                    >
                        <Link to={config.routes.home} className="shrink-0 max-[640px]:hidden dark:contrast-125">
                            <img className="h-auto max-w-full w-36 z-50" src={images.logo} alt="VegFoLos" />
                        </Link>

                        {!isLogin && !isCheckout && <Searchbar />}

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
                                !isLogin && !isCheckout && <Button title="News" outline to={config.routes.news} />
                            )}
                            {!isLogin &&
                                !isCheckout &&
                                (Object.keys(profile).length > 0 ? (
                                    <Menu>
                                        <MenuHandler>
                                            <Avatar
                                                size="sm"
                                                src={profile.picture || profile.picture.data.url}
                                                className="w-10 h-10"
                                            />
                                        </MenuHandler>
                                        <MenuList className="text-light-on-surface bg-light-surface-container-lowest">
                                            <MenuItem className="  hover:!bg-light-tertiary-container hover:!text-light-on-tertiary-container transition-colors">
                                                My Profile
                                            </MenuItem>

                                            <MenuItem
                                                onClick={logOut}
                                                className=" hover:!bg-light-tertiary-container hover:!text-light-on-tertiary-container"
                                            >
                                                Log out
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                ) : (
                                    <Link to={config.routes.login}>
                                        <Button title="Login" outline />
                                    </Link>
                                ))}
                            {isNews ? (
                                <></>
                            ) : (
                                !isLogin &&
                                !isCheckout && (
                                    <DrawerCustom
                                        ripple
                                        variant="outlined"
                                        className="rounded-full hover:bg-light-primary/8 dark:hover:bg-dark-primary/8 border-light-outline dark:border-dark-outline "
                                        icon={<BagIcon />}
                                        openDrawer={openDrawer}
                                        closeDrawer={closeDrawer}
                                        isOpenDrawer={isOpenDrawer}
                                        isCartBtn
                                    />
                                )
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
