import { useState, Fragment } from 'react';
import { Drawer, Button, Typography, IconButton, Checkbox } from '@material-tailwind/react';
import { CloseIcon } from '../Icons';
import images from '~/assets/img';
import numeral from 'numeral';

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
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

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
                onClose={_closeDrawer || closeDrawer}
                className="p-5 flex-col space-y-5 "
                size={516}
                placement="right"
                overlay={isOpenDrawer ? false : true}
            >
                <div className="fixed top-5 pb-5 border-b w-full mx-[-20px]">
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
                        <div className="pt-5 border-t-8 border-light-outline-variant">
                            <Typography className="mb-3 font-medium text-light-on-surface">
                                Optional ({data.optional.length})
                            </Typography>
                            <div className="flex-col space-y-2">
                                {data.optional.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center pt-1 border-t border-light-outline-variant"
                                    >
                                        <Checkbox
                                            ripple
                                            label={item.toppingName}
                                            labelProps={{ class: 'text-light-on-surface font-normal text-base' }}
                                            className="border-light-outline checked:bg-light-primary"
                                        />
                                        <Typography className="text-base font-normal text-light-on-surface">
                                            {numeral(item.toppingPrice).format('0,0')}
                                        </Typography>
                                    </div>
                                ))}
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
