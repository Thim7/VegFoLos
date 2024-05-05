import { useState, Fragment, useReducer, useEffect, useRef, useContext } from 'react';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    Checkbox,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';
import { BagIcon, CloseIcon, DeleteIcon, MinusIcon, PlusIcon } from '../Icons';
import images from '~/assets/img';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import { orderAdded, orderQuantityUpdated, orderRemoved } from '~/features/orders/ordersSlice';
import { nanoid } from '@reduxjs/toolkit';

import { getTotalPriceInCart, getOrdersInCart } from '~/selector/orders';
import { RestaurantDataContext } from '~/pages/Restaurant/Restaurant';
import { Link } from 'react-router-dom';
import config from '~/config';
const DRAWER_SIZE = 516;

// quantity actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';

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
    isAdded = undefined,
}) {
    const totalPrice = data?.totalPrice;
    const originalPrice = data?.originalPrice;

    const [open, setOpen] = useState(false);
    const [isCancel, setCancel] = useState(false);
    const [isCancelOutside, setCancelOutside] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [totalPriceValue, setTotalPrice] = useState(totalPrice);
    const [originalPriceValue, setOriginalPrice] = useState(originalPrice);
    const [haveOrders, setHaveOrders] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const body = document.body;

    const { title, timeDelivery, distanceDelivery } = useContext(RestaurantDataContext);

    const user =
        JSON.parse(localStorage.getItem('authGoogleInfo')) || JSON.parse(localStorage.getItem('authFacebookInfo'));

    const totalPriceInCart = useSelector(getTotalPriceInCart);
    const haveOrdersInCart = useSelector(getOrdersInCart);
    const nameCheckboxRef = useRef([]);
    const checkboxRef = useRef([]);
    const inputRef = useRef();

    const [quantity, dispatchQuantity] = useReducer(reducerQuantity, 1);

    const dispatch = useDispatch();

    const handleOpenDialog = () => {
        setOpenDialog(!openDialog);
    };
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

    function updatePriceInCart(totalPrice, originalPrice, quantity, checkBox = []) {
        const selectedOptional = [];
        if (checkBox.length > 0) {
            checkBox?.forEach((item, index) => {
                const containerNode = item.closest('.optional-bar');
                const checkboxValue = containerNode.children[1].innerHTML;
                if (item.checked) {
                    selectedOptional.push(Number(checkboxValue.replace(',', '')));
                } else if (item.checked === false) {
                    selectedOptional.splice(index, 1);
                }
            });
        }
        const optional = selectedOptional.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);

        const newTotalPrice = (totalPrice + optional) * quantity;
        const newOriginalPrice = (originalPrice + optional) * quantity;
        setTotalPrice(newTotalPrice);
        setOriginalPrice(newOriginalPrice);
    }

    function handleAddOptionalToCart() {
        const result = [];
        checkboxRef.current.forEach((item) => {
            if (item.checked === true) {
                const parentNode = item.closest('.optional-bar');
                const optional = {};
                optional.toppingName = parentNode.children[0].children[1]?.innerHTML;
                optional.toppingPrice = parentNode.children[1]?.innerHTML;
                result.push(optional);
            }
        });
        return result;
    }

    function handleClickAddToCart() {
        if (haveOrdersInCart.length > 0 && title !== haveOrdersInCart[haveOrdersInCart.length - 1].title) {
            setOpenDialog(true);
            return;
        }
        // let itemsInCart = [];
        dispatch(
            orderAdded({
                id: nanoid(),
                title,
                timeDelivery,
                distanceDelivery,
                img: data?.img,
                foodName: data?.foodName,
                quantity,
                originalPricePerUnit: originalPrice,
                salePrice: totalPrice,
                originalPrice: originalPriceValue,
                totalPrice: totalPriceValue,
                note: inputRef.current?.value,
                optional: handleAddOptionalToCart(),
            }),
        );

        // if (localStorage.getItem('itemsInCart')) {
        //     itemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));
        // }
        // itemsInCart.push(haveOrdersInCart[haveOrdersInCart.length - 1]);
        // localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
        setHaveOrders(true);
        closeDrawer();
    }

    function handleClickCheckBox(e) {
        const containerNode = e.target.closest('.optional-bar');
        const checkboxValue = containerNode.children[1].innerHTML;
        if (e.target.checked) {
            const newTotalPrice = totalPriceValue + Number(checkboxValue.replace(',', '')) * quantity;
            const newOriginalPrice = originalPriceValue + Number(checkboxValue.replace(',', '')) * quantity;
            setTotalPrice(newTotalPrice);
            setOriginalPrice(newOriginalPrice);
        } else if (e.target.checked === false) {
            const newTotalPrice = totalPriceValue - Number(checkboxValue.replace(',', '')) * quantity;
            const newOriginalPrice = originalPriceValue - Number(checkboxValue.replace(',', '')) * quantity;
            setTotalPrice(newTotalPrice);
            setOriginalPrice(newOriginalPrice);
        }
    }

    useEffect(() => {
        if (quantity <= 0) {
            setCancel(true);
            setDisabledBtn(true);
            return;
        }
        setCancel(false);
        setDisabledBtn(false);
        updatePriceInCart(totalPrice, originalPrice, quantity, checkboxRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    useEffect(() => {
        if (isAdded?.quantity <= 0) {
            setCancelOutside(true);
            return;
        }
        setCancelOutside(false);
    }, [isAdded]);

    // useEffect(() => {
    //     let itemsInCart = [];
    //     if (localStorage.getItem('itemsInCart')) {
    //         itemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));
    //     }
    //     itemsInCart.push(haveOrdersInCart[haveOrdersInCart.length - 1]);
    //     localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
    // }, [haveOrdersInCart]);
    return (
        <Fragment>
            {openDialog && (
                <Dialog open className="bg-light-surface-container-lowest">
                    <DialogHeader className="text-light-on-surface">Want to change restaurant?</DialogHeader>
                    <DialogBody className="text-light-on-surface-variant ">
                        You're adding an order from another restaurant to your cart. This action will delete previous
                        orders in cart. Do you want to continue?
                    </DialogBody>
                    <DialogFooter className="gap-x-3">
                        <Button
                            variant="text"
                            onClick={handleOpenDialog}
                            className="text-light-error hover:bg-light-error-container"
                        >
                            No
                        </Button>
                        <Button
                            ripple
                            className="bg-light-primary-container text-light-on-primary"
                            onClick={() => {
                                dispatch(
                                    orderAdded({
                                        id: nanoid(),
                                        title,
                                        img: data?.img,
                                        foodName: data?.foodName,
                                        quantity,
                                        originalPricePerUnit: originalPrice,
                                        salePrice: totalPrice,
                                        originalPrice: originalPriceValue,
                                        totalPrice: totalPriceValue,
                                        note: inputRef.current?.value,
                                        optional: data?.optional,
                                    }),
                                );
                                setHaveOrders(true);
                                handleOpenDialog();
                                closeDrawer();
                            }}
                        >
                            Yes
                        </Button>
                    </DialogFooter>
                </Dialog>
            )}
            {isCartBtn && haveOrdersInCart.length > 0 ? (
                <Button
                    onClick={_openDrawer || openDrawer}
                    size="sm"
                    className="flex items-center gap-3 rounded-full bg-light-primary"
                >
                    <BagIcon color="#ffffff" />
                    {numeral(totalPriceInCart).format('0,0')}
                </Button>
            ) : isAdded ? (
                <div className="inline-flex space-x-2 items-center border-2 border-light-outline rounded-xl p-2">
                    {isCancelOutside ? (
                        <IconButton
                            size="sm"
                            variant="text"
                            className="rounded-full hover:bg-light-error-container"
                            onClick={() => {
                                dispatch(orderRemoved({ id: isAdded.id }));
                            }}
                        >
                            <DeleteIcon color="#ba1a1a" />
                        </IconButton>
                    ) : (
                        <IconButton
                            size="sm"
                            onClick={() => {
                                dispatch(
                                    orderQuantityUpdated({
                                        id: isAdded.id,
                                        quantity: isAdded.quantity - 1,
                                        optional: isAdded.optional,
                                    }),
                                );
                            }}
                            variant="text"
                            className="rounded-full border-light-primary text-light-primary hover:bg-light-primary/8"
                        >
                            <MinusIcon color="#191c19" />
                        </IconButton>
                    )}
                    <Typography className="text-sm font-normal text-light-on-surface">{isAdded.quantity}</Typography>
                    <IconButton
                        size="sm"
                        onClick={() => {
                            dispatch(
                                orderQuantityUpdated({
                                    id: isAdded.id,
                                    quantity: isAdded.quantity + 1,
                                    optional: isAdded.optional,
                                }),
                            );
                        }}
                        variant="text"
                        className="rounded-full border-light-primary text-light-primary hover:bg-light-primary/8"
                    >
                        <PlusIcon color="#191c19" />
                    </IconButton>
                </div>
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
                onClose={openDialog ? () => {} : _closeDrawer || closeDrawer}
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
                        <div className="flex-col space-y-5 h-screen pt-16 pb-32 mx-[-20px] overflow-auto">
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
                                            className="optional-bar flex justify-between items-center pt-1 border-t border-light-outline-variant"
                                        >
                                            <Checkbox
                                                onClick={handleClickCheckBox}
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
                        <div className="flex-col space-y-5 h-screen pt-12 pb-48 mx-[-20px] overflow-auto px-5 divide-y">
                            <Typography className="text-xl text-light-on-surface pt-5 font-medium">
                                {haveOrdersInCart[haveOrdersInCart.length - 1].title}
                            </Typography>
                            {haveOrdersInCart.map((order) => (
                                <div
                                    key={order.id}
                                    className="inline-flex items-center justify-between space-x-2 w-full pt-5"
                                >
                                    <div className="flex space-x-2 items-center min-h-20 h-fit">
                                        <div className="flex space-x-2 items-center">
                                            <IconButton
                                                size="sm"
                                                className="rounded-full"
                                                variant="text"
                                                disabled={order.quantity <= 0}
                                                onClick={() => {
                                                    dispatch(
                                                        orderQuantityUpdated({
                                                            id: order.id,
                                                            quantity: order.quantity - 1,
                                                            optional: order.optional,
                                                        }),
                                                    );
                                                }}
                                            >
                                                <MinusIcon color="#a6ca94" strokeWidth={2} />
                                            </IconButton>
                                            <Typography className="text-base font-normal">{order.quantity}</Typography>
                                            <IconButton
                                                size="sm"
                                                className="rounded-full"
                                                variant="text"
                                                onClick={() => {
                                                    dispatch(
                                                        orderQuantityUpdated({
                                                            id: order.id,
                                                            quantity: order.quantity + 1,
                                                            optional: order.optional,
                                                        }),
                                                    );
                                                }}
                                            >
                                                <PlusIcon color="#a6ca94" strokeWidth={2} />
                                            </IconButton>
                                        </div>
                                        <img
                                            src={order.img}
                                            alt={order.foodName}
                                            className="max-w-28 w-full h-auto object-cover rounded-xl"
                                        />
                                        <div className="flex-col max-w-[200px] space-y-2 justify-between">
                                            <p className="text-base font-medium text-light-on-surface">
                                                {order.foodName}
                                            </p>
                                            <div className="flex space-x-2">
                                                {order.optional.map((option, index) => (
                                                    <p
                                                        className="text-sm text-light-on-surface font-normal"
                                                        key={index}
                                                    >
                                                        {option.toppingName}
                                                    </p>
                                                ))}
                                            </div>
                                            <p className="text-sm font-light text-light-on-surface-variant">
                                                {order.note}
                                            </p>
                                        </div>
                                    </div>
                                    {order.quantity <= 0 ? (
                                        <Button
                                            size="sm"
                                            variant="text"
                                            className="rounded-full text-light-error hover:bg-light-error-container"
                                            onClick={() => {
                                                dispatch(orderRemoved({ id: order.id }));
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    ) : (
                                        <div className="flex-col flex-shrink-0">
                                            <Typography className="text-base font-normal text-light-on-surface">
                                                {numeral(order.totalPrice).format('0,0')}
                                            </Typography>
                                            <strike className="text-base font-light text-light-on-surface-variant">
                                                {numeral(order.originalPrice).format('0,0')}
                                            </strike>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-5 inline-flex justify-between w-full">
                                <div className="flex-col">
                                    <Typography className="text-base font-medium text-light-on-surface">
                                        Subtotal
                                    </Typography>
                                    <Typography className="text-base font-normal text-light-on-surface-variant">
                                        *Delivery Fee will be shown after you review order
                                    </Typography>
                                </div>
                                <Typography className="text-base font-normal text-light-on-surface-variant">
                                    {numeral(totalPriceInCart).format('0,0')}
                                </Typography>
                            </div>
                        </div>
                        <div
                            className={`fixed bottom-0 bg-light-tertiary-container mx-[-20px] w-full max-w-[${DRAWER_SIZE}px] h-32 shadow-inner`}
                        >
                            <div className="flex-col space-y-5 items-center w-full px-5 py-5 h-full">
                                <div className="inline-flex w-full items-center justify-between">
                                    <Typography className="text-xl font-normal text-light-on-tertiary-container">
                                        Total
                                    </Typography>
                                    <Typography className="text-xl font-bold text-light-on-tertiary-container">
                                        {numeral(totalPriceInCart).format('0,0')} VND
                                    </Typography>
                                </div>
                                <div>
                                    {user ? (
                                        <Link to={config.routes.checkout} state={{ haveOrdersInCart }}>
                                            <Button
                                                size="lg"
                                                ripple
                                                fullWidth
                                                className="bg-light-primary text-light-on-primary font-bolt rounded-full"
                                            >
                                                Checkout
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link to={config.routes.login} state={{ haveOrdersInCart }}>
                                            <Button
                                                size="lg"
                                                ripple
                                                fullWidth
                                                className="bg-light-primary text-light-on-primary font-bolt rounded-full"
                                            >
                                                Log in to place order
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {!data && (
                    <>
                        <div className="flex-col space-y-10 text-center flex-grow h-full pt-20">
                            <img src={images.cartImage} alt="Cart" className="max-w-48 w-full h-auto m-auto" />
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
