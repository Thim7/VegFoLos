import { Breadcrumbs, IconButton, Typography } from '@material-tailwind/react';
import { Link, useLocation } from 'react-router-dom';
import images from '~/assets/img';
import DropdownMenu from '~/components/DropdownMenu';
import FoodItemCard from '~/components/FoodItemCard';
import { EllipseIcon, HomeIcon, LotusIcon, PlusIcon, StarIcon, TimeIcon } from '~/components/Icons';
import config from '~/config';
import Header from '~/layouts/components/Header';

const deliveryDate = ['Today', 'Tomorrow'];
const deliveryTime = ['Now', 'Later'];

const RESTAURANT_ITEM_TAB_DATA = [
    {
        label: 'Flash Sale',
        value: 'Flash Sale',
        content: <div>Hello</div>,
    },
    {
        label: 'Best Seller',
        value: 'Best Seller',
        content: <div>Hello</div>,
    },
    {
        label: 'Best Rating',
        value: 'Best Rating',
        content: <div>Hello</div>,
    },
];
function Restaurant() {
    let { state } = useLocation();
    const data = state.data;
    return (
        <>
            <Header />
            <section className=" flex-col space-y-16 bg-light-surface-container-lowest w-full 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 mt-40 ">
                <div className="flex-col space-y-4">
                    <Breadcrumbs className="bg-light-surface-container-high">
                        <Link
                            to={config.routes.home}
                            className="opacity-60 hover:text-light-primary text-light-on-surface transition-colors "
                        >
                            <HomeIcon />
                        </Link>
                        <Link
                            to={config.routes.restaurants}
                            className="hover:text-light-primary text-light-on-surface transition-colors opacity-60"
                        >
                            <span>Restaurants</span>
                        </Link>

                        <Link
                            to={config.routes.restaurants}
                            className="hover:text-light-primary text-light-on-surface transition-colors"
                        >
                            <span>{data.title}</span>
                        </Link>
                    </Breadcrumbs>
                    <div className="flex space-x-2 items-center">
                        {data.trusted && <LotusIcon />}
                        <p className="uppercase text-3xl text-ellipsis text-light-on-surface">{data.title}</p>
                    </div>
                    <div className="flex space-x-1">
                        {data.tags &&
                            data.tags.map((tag, index) => (
                                <Typography
                                    className=" text-light-on-surface-variant text-ellipsis px-2 font-normal text-base"
                                    key={index}
                                >
                                    #{tag}
                                </Typography>
                            ))}
                    </div>
                    <div className="flex space-x-8 items-center">
                        <div className="flex space-x-2 items-center">
                            <StarIcon />
                            <p className="text-sm">{data.star}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="flex space-x-2 items-center">
                                <TimeIcon />
                                <p>{data.timeDelivery} mins</p>
                            </div>
                            <EllipseIcon />
                            <p>{data.distanceDelivery} km</p>
                        </div>
                    </div>
                    <div className="flex space-x-10">
                        <Typography className="text-base font-bold text-light-on-surface">Openning Hours</Typography>
                        <Typography className="text-base font-normal text-light-on-surface">
                            Today 07:00-23:59
                        </Typography>
                    </div>
                    <div className="flex space-x-8">
                        <DropdownMenu
                            title="Deliver date: Today"
                            menuItems={deliveryDate}
                            className="rounded-lg h-14"
                        />
                        <DropdownMenu title="Deliver time: Now" menuItems={deliveryTime} className="rounded-lg h-14" />
                    </div>
                </div>
                <div className="inline-flex">
                    <button className="border-b-2 border-light-primary py-2 px-5">
                        <Typography className="font-bold text-xl text-light-primary">Flash Sale</Typography>
                    </button>
                    <button className="py-2 px-5 hover:text-light-primary/80 text-light-on-background">
                        <Typography className="font-medium text-xl ">Best Seller</Typography>
                    </button>
                    <button className="py-2 px-5 hover:text-light-primary/80 text-light-on-background">
                        <Typography className="font-medium text-xl ">Best Rating</Typography>
                    </button>
                </div>
            </section>
            <div className="2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 mt-16 flex-col space-y-16">
                <section>
                    <Typography className="text-4xl font-normal">Flash Sale</Typography>
                    <div className="grid grid-cols-3 gap-8 mt-9">
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Typography className="text-4xl font-normal">Flash Sale</Typography>
                    <div className="grid grid-cols-3 gap-8 mt-9">
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Typography className="text-4xl font-normal">Flash Sale</Typography>
                    <div className="grid grid-cols-3 gap-8 mt-9">
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 p-2 bg-light-surface-container-lowest rounded-lg shadow-md hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]">
                            <img src={images.blogImage2} alt="food" className="w-full h-auto object-cover rounded-xl" />
                            <div className="relative flex-col space-y-3 content-between">
                                <div className="flex-col space-y-2">
                                    <Typography className="text-base font-normal text-light-on-surface">
                                        Salad & Italian bread
                                    </Typography>
                                    <Typography className="text-xs text-light-on-surface-variant">
                                        Order our Salad and Italian Bread combo today and experience the perfect balance
                                        of freshness, flavor, and tradition. It's a delightful pairing that will leave
                                        you completely satisfied.
                                    </Typography>
                                </div>
                                <div className="inline-flex items-center space-x-1">
                                    <div className="bg-light-secondary-container p-1 rounded-lg">
                                        <Typography className="text-light-on-secondary-container text-xs font-normal">
                                            Save 5000 VND
                                        </Typography>
                                    </div>
                                    <strike className="text-xs font-light text-light-on-surface-variant">
                                        55000 VND
                                    </strike>
                                </div>
                                <div>
                                    <Typography className="font-bold text-base text-light-on-surface">
                                        50000 VND
                                    </Typography>
                                </div>
                                <IconButton
                                    size="sm"
                                    className="absolute right-0 bottom-0 rounded-full bg-light-primary"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Restaurant;
