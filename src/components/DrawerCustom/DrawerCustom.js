import { useState, Fragment, useReducer, useEffect, useRef, useContext } from 'react';
import { Drawer, Button, Typography, IconButton, Checkbox } from '@material-tailwind/react';
import { BagIcon, CloseIcon, MinusIcon, PlusIcon } from '../Icons';
import images from '~/assets/img';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import { orderAdded } from '~/features/orders/ordersSlice';
import { nanoid } from '@reduxjs/toolkit';
import { RestaurantDataContext } from '~/pages/Restaurant/Restaurant';
const DRAWER_SIZE = 516;

// quantity actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';

// Selector
const getTotalPriceInCart = (state) => {
    const orders = state.orders;
    let result = 0;
    const priceArr = orders.map((order) => order.totalPrice);
    priceArr.forEach((item) => (result += item));
    return result;
};

const getOrdersInCart = (state) => state.orders;

export default function DrawerCustom({
    ripple = false,
    variant = 'filled',
    className: customClassName,
    icon,
    data,
    openDrawer: _openDrawer,
    closeDrawer: _closeDrawer,
    isOpenDrawer,
    isCartBtn = false,
}) {
    const totalPrice = data?.totalPrice;
    const originalPrice = data?.originalPrice;

    const [open, setOpen] = useState(false);
    const [isCancel, setCancel] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [totalPriceValue, setTotalPrice] = useState(totalPrice);
    const [originalPriceValue, setOriginalPrice] = useState(originalPrice);
    const [haveOrders, setHaveOrders] = useState(false);

    const body = document.body;

    const { title } = useContext(RestaurantDataContext);

    const totalPriceInCart = useSelector(getTotalPriceInCart);
    const haveOrdersInCart = useSelector(getOrdersInCart);

    const nameCheckboxRef = useRef([]);
    const checkboxRef = useRef([]);
    const inputRef = useRef();

    const [quantity, dispatchQuantity] = useReducer(reducerQuantity, 1);

    const dispatch = useDispatch();

    const openDrawer = () => {
        setOpen(true);
        body.classList.add('overflow-hidden');
    };
    const closeDrawer = () => {
        setOpen(false);
        body.classList.remove('overflow-hidden');

        // Reset Optional checkbox
        checkboxRef.current.forEach((item) => {
            if (item.checked === true) item.checked = false;
        });

        // Reset Note
        var valueRef = inputRef.current?.value;
        if (!!valueRef) {
            inputRef.current.value = '';
        }

        // Reset price
        updatePriceInCart(totalPrice, originalPrice, 1);

        // Reset quantity
        dispatchQuantity({ type: 'reset' });
    };

    const handleClickMinusBtn = () => {
        dispatchQuantity({ type: 'decrement' });
    };

    const handleClickPlusBtn = () => {
        dispatchQuantity({ type: 'increment' });
    };

    function reducerQuantity(quantity, action) {
        switch (action.type) {
            case INCREMENT:
                return quantity + 1;

            case DECREMENT:
                return quantity - 1;

            case RESET:
                return 1;
            default:
                return quantity;
        }
    }

    function updatePriceInCart(totalPrice, originalPrice, quantity, bonus = 0) {
        const newTotalPrice = totalPrice * quantity + bonus;
        const newOriginalPrice = originalPrice * quantity;
        setTotalPrice(newTotalPrice);
        setOriginalPrice(newOriginalPrice);
    }

    function handleClickAddToCart() {
        dispatch(
            orderAdded({
                id: nanoid(),
                title,
                img: data.img,
                foodName: data.foodName,
                quantity,
                originalPrice: originalPriceValue,
                totalPrice: totalPriceValue,
                note: inputRef.current?.value,
                optional: data.optional,
            }),
        );
        setHaveOrders(true);
        closeDrawer();
    }

    useEffect(() => {
        if (quantity <= 0) {
            setCancel(true);
            setDisabledBtn(true);
            return;
        }
        setCancel(false);
        setDisabledBtn(false);
        updatePriceInCart(totalPrice, originalPrice, quantity);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    // useEffect(() => {
    //     checkboxRef.current.map((item) => {
    //         if (item.checked) {
    //             const currentElement = item.parentNode;
    //             console.log(currentElement);
    //         }
    //     });
    // }, [checkboxRef]);
    return (
        <Fragment>
            {isCartBtn && haveOrdersInCart.length > 0 ? (
                <Button
                    onClick={_openDrawer || openDrawer}
                    size="sm"
                    className="flex items-center gap-3 rounded-full bg-light-primary"
                >
                    <BagIcon color="#ffffff" />
                    {numeral(totalPriceInCart).format('0,0')}
                </Button>
            ) : (
                <IconButton
                    ripple={ripple}
                    variant={variant}
                    className={customClassName}
                    onClick={_openDrawer || openDrawer}
                >
                    {icon}
                </IconButton>
            )}
            {isOpenDrawer && (
                <div
                    className="absolute inset-0 w-screen h-screen pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm opacity-100 transition-all"
                    style={{ marginLeft: 0 }}
                ></div>
            )}
            <Drawer
                open={isOpenDrawer || open}
                onClose={_closeDrawer || closeDrawer}
                className="p-5 flex-col space-y-5 z-[9995]"
                size={DRAWER_SIZE}
                placement="right"
                overlay={isOpenDrawer ? false : true}
            >
                {/* Close Button */}
                <div className="fixed top-0 py-5 border-b w-full mx-[-20px] z-50 bg-light-surface-container-lowest">
                    <IconButton
                        variant="text"
                        className="left-5 rounded-full hover:bg-light-primary/8"
                        onClick={_closeDrawer || closeDrawer}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                {data && data.optional && (
                    <>
                        <div className="flex-col space-y-5 h-screen pt-16 mx-[-20px] overflow-auto">
                            <div className="inline-flex space-x-5 justify-between items-center px-5">
                                <img
                                    src={data.img}
                                    alt={data.foodName}
                                    className="max-w-36 w-full h-auto object-cover rounded-xl"
                                ></img>
                                <div className="inline-flex">
                                    <div className="flex-col space-y-2">
                                        <Typography className="text-light-on-surface font-bold text-xl">
                                            {data.foodName}
                                        </Typography>
                                        <p className="text-light-on-surface-variant font-normal text-base">
                                            {data.desc}
                                        </p>
                                    </div>
                                    <div className="flex-col space-y-2">
                                        <Typography className="text-light-on-surface font-bold text-xl">
                                            {numeral(totalPriceValue).format('0,0')}
                                        </Typography>
                                        <strike className="text-light-on-surface-variant font-light text-base justify-self-start">
                                            {numeral(originalPriceValue).format('0,0')}
                                        </strike>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-5 border-t-8 border-light-outline-variant"></div>
                            <div className="mx-5">
                                <Typography className="mb-3 font-medium text-light-on-surface">
                                    Optional ({data.optional.length})
                                </Typography>
                                <div className="flex-col space-y-2">
                                    {data.optional.map((item, index) => (
                                        <div
                                            ref={(el) => {
                                                nameCheckboxRef.current[index] = el;
                                            }}
                                            key={index}
                                            className="flex justify-between items-center pt-1 border-t border-light-outline-variant"
                                        >
                                            <Checkbox
                                                inputRef={(el) => {
                                                    checkboxRef.current[index] = el;
                                                }}
                                                ripple
                                                label={item.toppingName}
                                                labelProps={{
                                                    class: 'text-light-on-surface font-normal text-base',
                                                }}
                                                className="border-light-outline checked:bg-light-primary"
                                            />
                                            <Typography className="text-base font-normal text-light-on-surface">
                                                {numeral(item.toppingPrice).format('0,0')}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-5 border-t-8 border-light-outline-variant">
                                <div className="mx-5">
                                    <div className="flex-col space-y-2">
                                        <div className="inline-flex space-x-2 items-center">
                                            <Typography className="font-medium text-light-on-surface">Note</Typography>
                                            <Typography className="font-light text-light-on-surface-variant text-xs">
                                                Optional
                                            </Typography>
                                        </div>
                                        <div>
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                placeholder="E.g. Less sugar, please"
                                                className="h-11 w-full px-3 border border-light-outline focus:outline focus:shadow-md bg-light-surface-container-lowest text-light-on-surface text-base font-medium focus:placeholder:font-medium placeholder:font-normal  placeholder:text-light-on-surface-variant placeholder:opacity-80 transition-opacity rounded-lg"
                                            />
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`fixed bottom-0 bg-light-tertiary-container mx-[-20px] w-full max-w-[${DRAWER_SIZE}px] h-20 shadow-inner`}
                        >
                            <div className="inline-flex justify-between items-center space-x-5 w-full px-5 h-full">
                                <div className="inline-flex space-x-5 items-center">
                                    {disabledBtn ? (
                                        <IconButton disabled size="lg" className="bg-light-primary rounded-full">
                                            <MinusIcon />
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            size="lg"
                                            className="bg-light-primary rounded-full"
                                            onClick={handleClickMinusBtn}
                                        >
                                            <MinusIcon />
                                        </IconButton>
                                    )}
                                    <Typography className="text-2xl font-medium text-light-on-tertiary-container">
                                        {quantity}
                                    </Typography>
                                    <IconButton
                                        size="lg"
                                        className="bg-light-primary rounded-full"
                                        onClick={handleClickPlusBtn}
                                    >
                                        <PlusIcon />
                                    </IconButton>
                                </div>
                                <div className="w-full">
                                    {isCancel ? (
                                        <Button
                                            size="lg"
                                            fullWidth
                                            className="bg-light-error-container text-light-on-error-container font-bolt rounded-full"
                                            onClick={_closeDrawer || closeDrawer}
                                        >
                                            Cancel
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={handleClickAddToCart}
                                            size="lg"
                                            ripple
                                            fullWidth
                                            className="bg-light-primary text-light-on-primary font-bolt rounded-full"
                                        >
                                            Update Cart - {numeral(totalPriceValue).format('0,0')}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {!data && haveOrdersInCart.length > 0 && (
                    <>
                        <div className="h-full pt-12">
                            <Typography>You have orders</Typography>
                        </div>
                    </>
                )}
                {!data && (
                    <>
                        <div className="flex-col space-y-10 text-center flex-grow h-full pt-20">
                            <img src={images.cartImage} alt="Cart" className="max-w-60 w-full h-auto m-auto" />
                            <div>
                                <Typography className="text-3xl font-bold">Start Shopping!</Typography>
                                <Typography className="text-base font-normal">
                                    Add items to your basket and place order here.
                                </Typography>
                            </div>
                            <Typography
                                className="text-base text-light-primary font-medium opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                                onClick={_closeDrawer || closeDrawer}
                            >
                                Continue browsing
                            </Typography>
                        </div>
                    </>
                )}
            </Drawer>
        </Fragment>
    );
}
