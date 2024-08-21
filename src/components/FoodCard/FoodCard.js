import { Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';

import { PlusIcon } from '~/components/Icons';
import DrawerCustom from '../DrawerCustom';
import { getOrdersInCart } from '~/selector/orders';

function FoodCard({ data }) {
    const ordersInCart = useSelector(getOrdersInCart);

    const haveOrdersInCart = ordersInCart?.find((item) => {
        return item?.foodName === data?.foodName;
    });

    return (
        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)] dark:hover:shadow-[0_1px_3px_1px_rgba(255,255,255,0.3),_0_1px_2px_0_rgba(255,255,255,0.3)]">
            <img src={data.img} alt={data.foodName} className="w-full h-auto object-cover rounded-xl" />
            <div className="flex-col space-y-3 content-between">
                <div className="flex-col space-y-2">
                    <Typography className="text-base font-normal text-light-on-surface dark:text-dark-on-surface">
                        {data.foodName}
                    </Typography>
                    {data.desc && (
                        <Typography className="text-xs text-light-on-surface-variant dark:text-dark-on-surface-variant text-pretty">
                            {data.desc}
                        </Typography>
                    )}
                </div>
                {data.sale && (
                    <div className="inline-flex items-center space-x-1">
                        <div className="bg-light-secondary-container dark:bg-dark-secondary-container p-1 rounded-lg">
                            <Typography className="text-light-on-secondary-container dark:text-dark-on-secondary-container text-xs font-normal">
                                Save{' '}
                                <span className="text-light-on-secondary-container dark:text-dark-on-secondary-container">
                                    {data.sale}
                                </span>{' '}
                                VND
                            </Typography>
                        </div>
                        <strike className="text-xs font-light text-light-on-surface-variant dark:text-dark-on-surface-variant">
                            {data.originalPrice}
                        </strike>
                    </div>
                )}
                <div className="flex justify-between">
                    <Typography className="font-bold text-base text-light-on-surface dark:text-dark-on-surface">
                        {data.totalPrice} VND
                    </Typography>
                    <DrawerCustom
                        ripple
                        className="rounded-full bg-light-primary dark:bg-dark-primary"
                        icon={<PlusIcon />}
                        data={data}
                        isAdded={haveOrdersInCart}
                    />
                </div>
            </div>
            {haveOrdersInCart && (
                <>
                    <div className="bg-light-primary dark:bg-dark-primary h-1 rounded-e-lg w-full"></div>
                </>
            )}
        </div>
    );
}

export default FoodCard;
