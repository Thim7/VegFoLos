import { Breadcrumbs, IconButton, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DropdownMenu from '~/components/DropdownMenu';
import FoodCategory from '~/components/FoodCategory';
import { EllipseIcon, HomeIcon, LotusIcon, PlusIcon, StarIcon, TimeIcon } from '~/components/Icons';
import config from '~/config';
import Header from '~/layouts/components/Header';

const deliveryDate = ['Today', 'Tomorrow'];
const deliveryTime = ['Now', 'Later'];
const FOOD_ITEM_TAB_DATA = [
    {
        label: 'Flash Sale',
        value: 'flashSale',
        content: [
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
        ],
    },
    {
        label: 'Best Seller',
        value: 'bestSeller',
        content: [
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
        ],
    },
    {
        label: 'Best Rating',
        value: 'bestRating',
        content: [
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
            {
                foodName: 'Salad & Italian bread',
                desc: 'Order our Salad and Italian Bread combo today and experience the perfect balance of freshness, flavor, and tradition. It&apos;s a delightful pairing that will leave you completely satisfied.',
                sale: 5000,
                originalPrice: 55000,
                totalPrice: 50000,
            },
        ],
    },
];
function Restaurant() {
    const [active, setActive] = useState(false);

    let { state } = useLocation();
    const data = state.data;

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target;
        console.log(target);
        const tabLinkEls = document.querySelectorAll('.tab__link');
        tabLinkEls.forEach((tabLinkEl) => {
            tabLinkEl.classList.remove('active-tab');
            tabLinkEl.classList.remove('text-light-primary');
            tabLinkEl.classList.add('hover:text-light-primary/80');
        });

        target.classList.add('active-tab');
        target.classList.add('text-light-primary');
        target.classList.remove('hover:text-light-primary/80');

        const id = target.getAttribute('href');
        const element = document.getElementById(String(id));
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    useEffect(() => {
        const tabLinkEls = document.querySelectorAll('.tab__link');
        tabLinkEls[0].classList.add('active-tab');
        tabLinkEls[0].classList.add('text-light-primary');
        tabLinkEls[0].classList.remove('hover:text-light-primary/80');
    }, []);

    return (
        <>
            <Header className="shadow-none" />
            <section className="bg-light-surface-container-lowest w-full 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 mt-40 pb-8">
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
            </section>
            <div>
                <ul
                    className="sticky h-fit z-40 top-32 inline-flex 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 w-full pt-8 shadow-md bg-light-surface-container-lowest text-light-primary"
                    onClick={handleClick}
                >
                    {FOOD_ITEM_TAB_DATA.map((item, index) => (
                        <li key={index} className="pb-2 ">
                            <a
                                href={`#${item.value}`}
                                className="tab__link py-2 px-5 font-medium text-base hover:text-light-primary/80 text-light-on-background transition-all"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 mt-16 flex-col space-y-16">
                    {FOOD_ITEM_TAB_DATA.map((item, index) => (
                        <FoodCategory id={`#${item.value}`} data={item} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Restaurant;
