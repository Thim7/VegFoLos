import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import DatabaseButton from '~/components/DatabaseButton';
import { HomeIcon, SearchIcon } from '~/components/Icons';
import RestaurantCard from '~/components/RestaurantCard';
import config from '~/config';
import { DATABASE_ITEMS, RESTAURANT_ITEMS } from '~/data';

const { default: Header } = require('~/layouts/components/Header');

function Restaurants() {
    const userAddress = JSON.parse(localStorage.getItem('userAddress'));
    return (
        <>
            <Header />
            <div className="pt-40 w-full 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 flex-col space-y-9">
                <Breadcrumbs className="bg-light-surface-container-high">
                    <Link
                        to={config.routes.home}
                        className="opacity-60 hover:text-light-primary text-light-on-surface transition-colors "
                    >
                        <HomeIcon />
                    </Link>
                    <Link
                        to={config.routes.restaurants}
                        className="hover:text-light-primary text-light-on-surface transition-colors"
                    >
                        <span>Restaurants</span>
                    </Link>
                </Breadcrumbs>
                <div className="flex w-full h-10 justify-start space-x-2 items-center bg-light-surface-container-low text-light-on-surface border border-light-outline rounded-full">
                    <div className="ml-3">
                        <SearchIcon color="#414940" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for a dish or a restaurant"
                        className="text-sm font-normal text-light-on-surface-variant outline-none w-full bg-transparent"
                        spellCheck={false}
                    />
                </div>
                <div className="inline-flex justify-items-center space-x-5 w-full">
                    {DATABASE_ITEMS.map((item, index) => (
                        <DatabaseButton data={item} key={index} />
                    ))}
                </div>
            </div>
            <div className="mt-10 py-7 w-full 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 flex-col space-y-5 border-t-8 border-light-outline-variant">
                <p className="text-4xl text-light-on-surface font-normal">
                    Restaurants in <b className="font-medium">{userAddress}</b>
                </p>
                <div className="grid grid-cols-4 grid-flow-row gap-8">
                    {RESTAURANT_ITEMS.map((item, index) => (
                        <RestaurantCard data={item} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Restaurants;
