import { Breadcrumbs } from '@material-tailwind/react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, LotusIcon } from '~/components/Icons';
import config from '~/config';
import Header from '~/layouts/components/Header';

function Restaurant() {
    let { state } = useLocation();
    const data = state.data;
    return (
        <>
            <Header />
            <section className="w-full 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 max-[640px]:px-7 pt-40 snap-end snap-always">
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
                </div>
            </section>
        </>
    );
}

export default Restaurant;
