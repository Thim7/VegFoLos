import { Breadcrumbs, Typography } from '@material-tailwind/react';
import { Link, useLocation } from 'react-router-dom';
import DropdownMenu from '~/components/DropdownMenu';
import { EllipseIcon, HomeIcon, LotusIcon, StarIcon, TimeIcon } from '~/components/Icons';
import config from '~/config';
import Header from '~/layouts/components/Header';

const deliveryDate = ['Today', 'Tomorrow'];
const deliveryTime = ['Now', 'Later'];

function Restaurant() {
    let { state } = useLocation();
    const data = state.data;
    return (
        <>
            <Header />
            <section className="bg-light-surface-container-lowest w-full 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 pt-40 pb-14 snap-end snap-always">
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
        </>
    );
}

export default Restaurant;
