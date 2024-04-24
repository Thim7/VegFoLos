import { Link, useLocation } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import numeral from 'numeral';
import { googleLogout } from '@react-oauth/google';
import axios from 'axios';

import { orderAdded, orderQuantityUpdated, orderRemoved } from '~/features/orders/ordersSlice';
import config from '~/config';
import images from '~/assets/img';
import DropdownMenu from '~/components/DropdownMenu';
import Button from '~/components/Button';
import Searchbar from '~/components/Searchbar';
import {
    Avatar,
    Drawer,
    IconButton,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
} from '@material-tailwind/react';
import { BagIcon, BarsIcon, CloseIcon, MinusIcon, PlusIcon } from '~/components/Icons';
import DrawerCustom from '~/components/DrawerCustom';

// Selector
const getOrdersInCart = (state) => state.orders;

const getTotalPriceInCart = (state) => {
    const orders = state.orders;
    let result = 0;
    const priceArr = orders.map((order) => order.totalPrice);
    priceArr.forEach((item) => (result += item));
    return result;
};

const menuItems = ['EN (English)', 'VI (Vietnamese)'];

const DRAWER_SIZE = 516;

function Header({
    hide: customHide = false,
    breakPointTransition,
    isNews = false,
    isLogin = false,
    className: customClassName,
}) {
    let location = useLocation();
    const [hide, setHide] = useState(customHide);
    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const [user, setUser] = useState(location.state?.user || location.state?.userFaceBook);
    const [profile, setProfile] = useState({});
    // log out function to log the user out of google and set the profile array to null

    const logOut = () => {
        if (user.type === 'google_login') {
            googleLogout();
        } else {
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

    const totalPriceInCart = useSelector(getTotalPriceInCart);
    const haveOrdersInCart = useSelector(getOrdersInCart);

    const dispatch = useDispatch();

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

                        {!isLogin && <Searchbar />}

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
                                !isLogin && <Button title="News" outline to={config.routes.news} />
                            )}
                            {!isLogin &&
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
                                !isLogin && (
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
                                )

                                // Drawer Cart
                                // <Fragment>
                                //     {haveOrdersInCart.length > 0 ? (
                                //         <Button
                                //             onClick={openDrawer}
                                //             size="sm"
                                //             className="flex items-center gap-3 rounded-full bg-light-primary"
                                //         >
                                //             <BagIcon color="#ffffff" />
                                //             {numeral(totalPriceInCart).format('0,0')}
                                //         </Button>
                                //     ) : (
                                //         <IconButton
                                //             ripple
                                //             variant="outlined"
                                //             className="rounded-full hover:bg-light-primary/8 border-light-outline"
                                //             onClick={openDrawer}
                                //         >
                                //             <BagIcon />
                                //         </IconButton>
                                //     )}
                                //     {isOpenDrawer && (
                                //         <div
                                //             className="absolute inset-0 w-screen h-screen pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm opacity-100 transition-all"
                                //             style={{ marginLeft: 0 }}
                                //         ></div>
                                //     )}
                                //     <Drawer
                                //         open={isOpenDrawer}
                                //         onClose={closeDrawer}
                                //         className="p-5 flex-col space-y-5 z-[9995]"
                                //         size={DRAWER_SIZE}
                                //         placement="right"
                                //         overlay={false}
                                //     >
                                //         {/* Close Btn */}
                                //         <div className="fixed top-0 py-5 border-b w-full mx-[-20px] z-50 bg-light-surface-container-lowest">
                                //             <IconButton
                                //                 variant="text"
                                //                 className="left-5 rounded-full hover:bg-light-primary/8"
                                //                 onClick={closeDrawer}
                                //             >
                                //                 <CloseIcon />
                                //             </IconButton>
                                //         </div>
                                //         {haveOrdersInCart.length > 0 && (
                                //             <>
                                //                 <div className="flex-col space-y-5 h-screen pt-12 pb-48 mx-[-20px] overflow-auto px-5 divide-y">
                                //                     {haveOrdersInCart.map((order) => (
                                //                         <div
                                //                             key={order.id}
                                //                             className="inline-flex items-center justify-between space-x-2 w-full pt-5"
                                //                         >
                                //                             <div className="flex space-x-2 items-center w-full min-h-20 h-fit">
                                //                                 <IconButton
                                //                                     size="sm"
                                //                                     className="rounded-full"
                                //                                     variant="text"
                                //                                     disabled={order.quantity <= 0}
                                //                                     onClick={() => {
                                //                                         dispatch(
                                //                                             orderQuantityUpdated({
                                //                                                 id: order.id,
                                //                                                 quantity: order.quantity - 1,
                                //                                             }),
                                //                                         );
                                //                                     }}
                                //                                 >
                                //                                     <MinusIcon color="#a6ca94" strokeWidth={2} />
                                //                                 </IconButton>
                                //                                 <Typography className="text-base font-normal">
                                //                                     {order.quantity}
                                //                                 </Typography>
                                //                                 <IconButton
                                //                                     size="sm"
                                //                                     className="rounded-full"
                                //                                     variant="text"
                                //                                     onClick={() => {
                                //                                         dispatch(
                                //                                             orderQuantityUpdated({
                                //                                                 id: order.id,
                                //                                                 quantity: order.quantity + 1,
                                //                                             }),
                                //                                         );
                                //                                     }}
                                //                                 >
                                //                                     <PlusIcon color="#a6ca94" strokeWidth={2} />
                                //                                 </IconButton>
                                //                                 <img
                                //                                     src={order.img}
                                //                                     alt={order.foodName}
                                //                                     className="max-w-28 w-full h-auto object-cover rounded-xl"
                                //                                 />

                                //                                 <div className="flex-col space-y-5 justify-between">
                                //                                     <Typography className="text-base font-medium text-light-on-surface">
                                //                                         {order.foodName}
                                //                                     </Typography>
                                //                                     <Typography className="text-base font-light text-light-on-surface-variant">
                                //                                         {order.note}
                                //                                     </Typography>
                                //                                 </div>
                                //                             </div>
                                //                             {order.quantity <= 0 ? (
                                //                                 <Button
                                //                                     size="sm"
                                //                                     variant="text"
                                //                                     className="rounded-full text-light-error hover:bg-light-error-container"
                                //                                     onClick={() => {
                                //                                         dispatch(orderRemoved({ id: order.id }));
                                //                                     }}
                                //                                 >
                                //                                     Remove
                                //                                 </Button>
                                //                             ) : (
                                //                                 <div className="flex-col">
                                //                                     <Typography className="text-base font-normal text-light-on-surface">
                                //                                         {numeral(order.totalPrice).format('0,0')}
                                //                                     </Typography>
                                //                                     <strike className="text-base font-light text-light-on-surface-variant">
                                //                                         {numeral(order.originalPrice).format('0,0')}
                                //                                     </strike>
                                //                                 </div>
                                //                             )}
                                //                         </div>
                                //                     ))}
                                //                     <div className="pt-5 inline-flex justify-between w-full">
                                //                         <div className="flex-col">
                                //                             <Typography className="text-base font-medium text-light-on-surface">
                                //                                 Subtotal
                                //                             </Typography>
                                //                             <Typography className="text-base font-normal text-light-on-surface-variant">
                                //                                 *Delivery Fee will be shown after you review order
                                //                             </Typography>
                                //                         </div>
                                //                         <Typography className="text-base font-normal text-light-on-surface-variant">
                                //                             {totalPriceInCart}
                                //                         </Typography>
                                //                     </div>
                                //                 </div>
                                //                 <div
                                //                     className={`fixed bottom-0 bg-light-tertiary-container mx-[-20px] w-full max-w-[${DRAWER_SIZE}px] h-32 shadow-inner`}
                                //                 >
                                //                     <div className="flex-col space-y-5 items-center w-full px-5 py-5 h-full">
                                //                         <div className="inline-flex w-full items-center justify-between">
                                //                             <Typography className="text-xl font-normal text-light-on-tertiary-container">
                                //                                 Total
                                //                             </Typography>
                                //                             <Typography className="text-xl font-bold text-light-on-tertiary-container">
                                //                                 {totalPriceInCart} VND
                                //                             </Typography>
                                //                         </div>
                                //                         <Button
                                //                             size="lg"
                                //                             ripple
                                //                             fullWidth
                                //                             className="bg-light-primary text-light-on-primary font-bolt rounded-full"
                                //                         >
                                //                             Log in to place order
                                //                         </Button>
                                //                     </div>
                                //                 </div>
                                //             </>
                                //         )}
                                //         (
                                //         <>
                                //             <div className="flex-col space-y-10 text-center flex-grow h-full pt-20">
                                //                 <img
                                //                     src={images.cartImage}
                                //                     alt="Cart"
                                //                     className="max-w-48 w-full h-auto m-auto"
                                //                 />
                                //                 <div>
                                //                     <Typography className="text-3xl font-bold">
                                //                         Start Shopping!
                                //                     </Typography>
                                //                     <Typography className="text-base font-normal">
                                //                         Add items to your basket and place order here.
                                //                     </Typography>
                                //                 </div>
                                //                 <Typography
                                //                     className="text-base text-light-primary font-medium opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                                //                     onClick={closeDrawer}
                                //                 >
                                //                     Continue browsing
                                //                 </Typography>
                                //             </div>
                                //         </>
                                //         )
                                //     </Drawer>
                                // </Fragment>
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
