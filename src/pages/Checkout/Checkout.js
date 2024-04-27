import { Button, Typography } from '@material-tailwind/react';
import { useLocation } from 'react-router-dom';
import CustomInput from '~/components/CustomInput';
import Header from '~/layouts/components/Header';

function Checkout() {
    const location = useLocation();
    const order = location.state.haveOrdersInCart;

    console.log(order);
    return (
        <>
            <Header isCheckout />
            <div className="flex-col space-y-8 mt-24 pt-20 w-[428px] m-auto min-h-screen overflow-auto">
                <div>
                    <Typography className="text-4xl font-normal text-light-on-surface">Last Step - Checkout</Typography>
                    <Typography className="text-xl font-normal text-light-on-surface-variant">
                        {order[order.length - 1].title}
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
