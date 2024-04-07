import { useState, Fragment } from 'react';
import { Drawer, Button, Typography, IconButton } from '@material-tailwind/react';
import { CloseIcon } from '../Icons';
import images from '~/assets/img';

export default function DrawerCustom({
    ripple = false,
    variant = 'filled',
    className: customClassName,
    icon,
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
                className="p-4 flex-col divide-y space-y-4 "
                size={516}
                placement="right"
                overlay={isOpenDrawer ? false : true}
            >
                <IconButton
                    variant="text"
                    className="rounded-full hover:bg-light-primary/8"
                    onClick={_closeDrawer || closeDrawer}
                >
                    <CloseIcon />
                </IconButton>

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
            </Drawer>
        </Fragment>
    );
}
