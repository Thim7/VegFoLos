import { Typography } from '@material-tailwind/react';
import images from '~/assets/img';
import { PlusIcon } from '~/components/Icons';
import DrawerCustom from '../DrawerCustom';

function FoodCard({ data }) {
    // const handleClick = (e) => {
    //     e.preventDefault();
    // };
    return (
        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
            <img src={data.img} alt={data.foodName} className="w-full h-auto object-cover rounded-xl" />
            <div className=" flex-col space-y-3 content-between">
                <div className="flex-col space-y-2">
                    <Typography className="text-base font-normal text-light-on-surface">{data.foodName}</Typography>
                    {data.desc && (
                        <Typography className="text-xs text-light-on-surface-variant">{data.desc}</Typography>
                    )}
                </div>
                {data.sale && (
                    <div className="inline-flex items-center space-x-1">
                        <div className="bg-light-secondary-container p-1 rounded-lg">
                            <Typography className="text-light-on-secondary-container text-xs font-normal">
                                Save {data.sale} VND
                            </Typography>
                        </div>
                        <strike className="text-xs font-light text-light-on-surface-variant">
                            {data.originalPrice}
                        </strike>
                    </div>
                )}
                <div className="flex justify-between">
                    <Typography className="font-bold text-base text-light-on-surface">{data.totalPrice} VND</Typography>
                    <DrawerCustom ripple className="rounded-full bg-light-primary" icon={<PlusIcon />} data={data} />
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
