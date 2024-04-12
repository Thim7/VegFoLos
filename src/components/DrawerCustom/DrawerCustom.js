import { useState, Fragment, useReducer, useEffect, useRef } from 'react';
import { Drawer, Button, Typography, IconButton, Checkbox } from '@material-tailwind/react';
import { CloseIcon, MinusIcon, PlusIcon } from '../Icons';
import images from '~/assets/img';
import numeral, { options } from 'numeral';

const DRAWER_SIZE = 516;

// quantity actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';

// order actions
const SET_ORDER = 'set_order';
const ADD_ORDER = 'add_order';
const REMOVE_ORDER = 'remove_order';
export default function DrawerCustom({
    ripple = false,
    variant = 'filled',
    className: customClassName,
    icon,
    data,
    openDrawer: _openDrawer,
    closeDrawer: _closeDrawer,
    isOpenDrawer,
}) {
    const initialPrice = data?.totalPrice;
    const [open, setOpen] = useState(false);
    const [isCancel, setCancel] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [totalPriceValue, setTotalPrice] = useState(initialPrice);
    const body = document.body;

    const nameCheckboxRef = useRef([]);
    const checkboxRef = useRef([]);
    const inputRef = useRef();

    const openDrawer = () => {
        setOpen(true);
        body.classList.add('overflow-hidden');
    };
    const closeDrawer = () => {
        setOpen(false);
        body.classList.remove('overflow-hidden');
    };

    const initOrderInfo = {
        order: {
            img: data?.img,
            foodName: data?.foodName,
            totalPrice: data?.totalPrice,
            quantity: 1,
            note: '',
            options: [],
        },
        orders: [],
    };

    const [orderInfo, dispatchOrderInfo] = useReducer(reducerOrderInfo, initOrderInfo);
    const { order, orders } = orderInfo;

    var newState;

    function reducerOrderInfo(orderInfo, action) {
        switch (action.type) {
            case SET_ORDER:
                return (newState = {
                    ...orderInfo,
                    order: {
                        ...orderInfo.order,
                        totalPrice: action.payload.price,
                        quantity: action.payload.quantity,
                        note: action.payload.note,
                    },
                });
            case ADD_ORDER: {
                return;
            }
            case REMOVE_ORDER:
                return;
            default:
                return order;
        }
    }
    console.log(newState);

    const [quantity, dispatchQuantity] = useReducer(reducerQuantity, 1);

    function reducerQuantity(quantity, action) {
        var newQuantity;
        switch (action.type) {
            case INCREMENT:
                newQuantity = quantity + 1;
                updatePriceInCart(initialPrice, newQuantity);
                dispatchOrderInfo({
                    type: 'set_order',
                    payload: { quantity: newQuantity, price: initialPrice * newQuantity },
                });

                // totalPrice *= newQuantity
                return newQuantity;
            case DECREMENT:
                newQuantity = quantity - 1;
                updatePriceInCart(initialPrice, newQuantity);
                dispatchOrderInfo({
                    type: 'set_order',
                    payload: { quantity: newQuantity, price: initialPrice * newQuantity },
                });

                return newQuantity;
            case RESET:
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
                updatePriceInCart(initialPrice, 1);

                // Reset quantity
                return 1;
            default:
                return quantity;
        }
    }

    function updatePriceInCart(totalPrice, quantity, bonus = 0) {
        const newPrice = totalPrice * quantity + bonus;
        setTotalPrice(newPrice);
    }

    function handleClickAddToCart() {
        _closeDrawer ? _closeDrawer() : closeDrawer();
        dispatchQuantity({ type: 'reset' });
    }

    useEffect(() => {
        if (quantity <= 0) {
            setCancel(true);
            setDisabledBtn(true);
            return;
        }
        setCancel(false);
        setDisabledBtn(false);
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
            <IconButton
                ripple={ripple}
                variant={variant}
                className={customClassName}
                onClick={_openDrawer || openDrawer}
            >
                {icon}
            </IconButton>
            {isOpenDrawer && (
                <div
                    className="absolute inset-0 w-screen h-screen pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm opacity-100 transition-all"
                    style={{ marginLeft: 0 }}
                ></div>
            )}
            <Drawer
                open={isOpenDrawer || open}
                onClose={() => {
                    _closeDrawer ? _closeDrawer() : closeDrawer();
                    dispatchQuantity({ type: 'reset' });
                }}
                className="p-5 flex-col space-y-5 z-[9995]"
                size={DRAWER_SIZE}
                placement="right"
                overlay={isOpenDrawer ? false : true}
            >
                {/* Close Button */}
                <div className="fixed top-5 pb-5 border-b w-full mx-[-20px]">
                    <IconButton
                        variant="text"
                        className="left-5 rounded-full hover:bg-light-primary/8"
                        onClick={() => {
                            _closeDrawer ? _closeDrawer() : closeDrawer();
                            dispatchQuantity({ type: 'reset' });
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                {data && data.optional && (
                    <>
                        <div className="inline-flex space-x-5 justify-between items-center pt-16">
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
                                    <p className="text-light-on-surface-variant font-normal text-base">{data.desc}</p>
                                </div>
                                <div className="flex-col space-y-2">
                                    <Typography className="text-light-on-surface font-bold text-xl">
                                        {numeral(data.totalPrice).format('0,0')}
                                    </Typography>
                                    <strike className="text-light-on-surface-variant font-light text-base justify-self-start">
                                        {numeral(data.originalPrice).format('0,0')}
                                    </strike>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5 border-t-8 border-light-outline-variant mx-[-20px]">
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
                        </div>
                        <div className="pt-5 border-t-8 border-light-outline-variant mx-[-20px]">
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
                                            onChange={(e) => {
                                                dispatchOrderInfo({
                                                    type: 'set_order',
                                                    payload: { note: e.target.value },
                                                });
                                            }}
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
                                            onClick={() => dispatchQuantity({ type: 'decrement' })}
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
                                        onClick={() => dispatchQuantity({ type: 'increment' })}
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
                                            onClick={() => {
                                                _closeDrawer ? _closeDrawer() : closeDrawer();
                                                dispatchQuantity({ type: 'reset' });
                                            }}
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
                {!data && (
                    <>
                        <div className="flex-col space-y-10 text-center flex-grow h-full pt-12">
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
