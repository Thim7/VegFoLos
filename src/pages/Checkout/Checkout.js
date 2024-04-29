import { Button, IconButton, Input, Option, Select, Typography } from '@material-tailwind/react';
import classNames from 'classnames';
import { cloneElement, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import images from '~/assets/img';
import CustomInput from '~/components/CustomInput';
import { CashIcon, CreditCardIcon, InfoIcon, MinusIcon, PlusIcon } from '~/components/Icons';
import Header from '~/layouts/components/Header';

function Checkout() {
    const location = useLocation();
    const order = location.state?.haveOrdersInCart;

    const [inputValue, setInputValue] = useState('');

    function handleOnChange(e) {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <>
            <Header isCheckout />
            <div className="flex-col space-y-8 mt-24 pt-20 w-[428px] m-auto min-h-screen overflow-auto">
                <div>
                    <Typography className="text-4xl font-normal text-light-on-surface">Last Step - Checkout</Typography>
                    <Typography className="text-xl font-normal text-light-on-surface-variant">
                        {order[order?.length - 1].title}
                    </Typography>
                </div>
                <div className="w-full flex-col space-y-4 bg-light-surface-container-lowest rounded-lg divide-y divide-light-outline-variant p-4">
                    <Typography className="text-xl font-medium">Deliver To</Typography>
                    <div className="flex-col pt-4">
                        <Typography className="font-normal text-light-on-surface-variant">Arrival time </Typography>
                        <Typography className="text-base font-semibold text-light-on-surface">
                            20 mins (1.1 km away)
                        </Typography>
                    </div>
                    <div className="flex-col space-y-8 pt-4">
                        <CustomInput
                            label="Address"
                            placeholder="C11/4, KP2, District 9, Tang Nhon Phu A Ward, Thu Duc City, Ho Chi Minh, 70000, Vietnam"
                            isDisabled
                        />
                        <CustomInput label="Address details" placeholder="e.g. Floor, unit number" />
                        <CustomInput
                            label="Note for Shipper"
                            placeholder="e.g. Meet me at the main gate of the company"
                        />
                    </div>
                </div>
                <div className="w-full flex-col space-y-4 bg-light-surface-container-lowest rounded-lg divide-y divide-light-outline-variant p-4">
                    <Typography className="text-xl font-medium">Order Summary</Typography>
                    <div className="inline-flex w-full items-center justify-between pt-4">
                        <div className="inline-flex items-center space-x-3">
                            <div className="inline-flex items-center space-x-1">
                                <IconButton
                                    size="sm"
                                    className="rounded-full"
                                    variant="text"
                                    disabled={order.quantity <= 0}
                                    // onClick={() => {
                                    //     dispatch(
                                    //         orderQuantityUpdated({
                                    //             id: order.id,
                                    //             quantity: order.quantity - 1,
                                    //             optional: order.optional,
                                    //         }),
                                    //     );
                                    // }}
                                >
                                    <MinusIcon color="#a6ca94" strokeWidth={2} />
                                </IconButton>
                                <Typography className="text-sm font-normal">{order?.length}</Typography>
                                <IconButton
                                    size="sm"
                                    className="rounded-full"
                                    variant="text"
                                    // onClick={() => {
                                    //     dispatch(
                                    //         orderQuantityUpdated({
                                    //             id: order.id,
                                    //             quantity: order.quantity + 1,
                                    //             optional: order.optional,
                                    //         }),
                                    //     );
                                    // }}
                                >
                                    <PlusIcon color="#a6ca94" strokeWidth={2} />
                                </IconButton>
                            </div>
                            <img src={images.blogImage2} alt="Hello" className="object-cover w-16 h-auto rounded-lg" />
                            <Typography className="text-sm font-medium text-light-on-surface">
                                Salad & Italian bread
                            </Typography>
                        </div>
                        <div className="flex-col">
                            <Typography className="text-sm font-normal text-light-on-surface">50000</Typography>
                            <strike className="text-xs font-normal text-light-on-surface-variant">55000</strike>
                        </div>
                    </div>
                    <div className="flex-col space-y-2 pt-4">
                        <div className="w-full inline-flex items-center justify-between ">
                            <Typography className="text-sm font-normal text-light-on-surface">Subtotal</Typography>
                            <Typography className="text-sm font-normal text-light-on-surface">0 VND</Typography>
                        </div>
                        <div className="w-full inline-flex items-center justify-between ">
                            <div className="inline-flex items-center space-x-1">
                                <Typography className="text-sm font-normal text-light-on-surface">Ship Fee</Typography>
                                <IconButton size="sm" variant="text" className="rounded-full">
                                    <InfoIcon className="w-5 h-5" />
                                </IconButton>
                            </div>
                            <Typography className="text-sm font-normal text-light-on-surface">15000 VND</Typography>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-col space-y-4 bg-light-surface-container-lowest rounded-lg divide-y divide-light-outline-variant p-4">
                    <Typography className="text-xl font-medium">Payment Details</Typography>

                    <div className="pt-4">
                        <Select
                            label="Payment Method"
                            // selected={(element) => {
                            //     element &&
                            //         cloneElement(element, {
                            //             disabled: true,
                            //             className: 'inline-flex items-center space-x-1',
                            //         });
                            // }}
                            color="text-light-outline"
                            containerProps={{ className: '' }}
                            labelProps={{ className: 'text-light-on-surface-variant' }}
                            menuProps={{ className: '' }}
                            className="outline-light-outline"
                        >
                            <Option className="w-full inline-flex items-center space-x-1 hover:!text-light-on-tertiary-container hover:!bg-light-tertiary-container focus:!text-light-on-tertiary-container focus:!bg-light-tertiary-container">
                                <CashIcon color="#414940" /> <p className="text-light-on-surface">Cash</p>
                            </Option>
                            <Option className="w-full inline-flex items-center space-x-1 hover:!text-light-on-tertiary-container hover:!bg-light-tertiary-container focus:!text-light-on-tertiary-container focus:!bg-light-tertiary-container">
                                <CreditCardIcon color="#414940" /> <p className="text-light-on-surface ">Credit Card</p>
                            </Option>
                        </Select>
                    </div>
                </div>
                <div className="w-full flex-col space-y-4 bg-light-surface-container-lowest rounded-lg divide-y divide-light-outline-variant p-4">
                    <Typography className="text-xl font-medium">Promo</Typography>

                    <div className="flex-col pt-4 space-y-7">
                        <div className="w-full flex items-center justify-between gap-x-4">
                            <Input label="Add promo code" onChange={handleOnChange} />
                            <Button
                                disabled={inputValue ? false : true}
                                className="bg-light-primary text-light-on-primary shrink-0 rounded-full"
                            >
                                Apply
                            </Button>
                        </div>
                        <div className=" w-full h-fit p-1 border border-light-outline rounded-lg">
                            <div className="w-full inline-flex items-end justify-between">
                                <div className="flex-col space-y-1">
                                    <Typography className="text-base font-bold text-light-on-surface">
                                        VNPay - Discount 20%
                                    </Typography>
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Promo Code: <span className="font-bold text-light-primary">VNPAY01</span>
                                    </Typography>
                                    <Typography className="text-sm font-normal text-light-on-surface-variant">
                                        Valid 2023-09-01 to 2023-09-30
                                    </Typography>
                                </div>
                                <Button className="bg-light-primary text-light-on-primary rounded-full ">Apply</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-flex w-full items-center justify-between bg-light-surface-container-lowest rounded-lg space-x-8 p-2">
                    <img src={images.trackingOrder} alt="Tracking Order" className="object-cover w-[120px] h-auto" />
                    <div className="flex-col space-y-2">
                        <Typography className="text-sm font-normal text-light-on-surface">
                            Use other payment methods and enjoy exclusive promo only on Grab app.
                        </Typography>
                        <div className="w-full inline-flex items-center justify-between space-x-3">
                            <button>
                                <img
                                    src={images.googlePlayBadge}
                                    alt="Google Play Badge"
                                    className="w-[160px] h-auto object-cover"
                                />
                            </button>
                            <button>
                                <img
                                    src={images.appStoreBadge}
                                    alt="App Store Badge"
                                    className="w-[160px] h-auto object-cover"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full inline-flex items-center space-x-5 justify-center">
                    <Typography className="font-normal text-xs text-light-on-background">© 2023 VegFoLos</Typography>
                    <Typography className="font-normal text-xs text-light-on-background">Terms</Typography>
                    <Typography className="font-normal text-xs text-light-on-background">Privacy Policy</Typography>
                </div>
            </div>

            <div className="bottom-0 fixed w-full h-28 bg-light-surface-container-lowest shadow-inner">
                <div className="w-full h-full flex justify-center">
                    <div className=" inline-flex w-[428px] items-center justify-between">
                        <div className="flex-col">
                            <Typography className="font-normal text-base text-light-on-surface">Total</Typography>
                            <Typography className="font-medium text-xl text-light-on-surface">0 VND</Typography>
                        </div>
                        <Button size="lg" className="bg-light-primary text-light-on-primary rounded-full">
                            Order
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
