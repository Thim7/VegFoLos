import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/img';
import DropdownMenu from '~/components/DropdownMenu';
import Button from '~/components/Button';
import Searchbar from '~/components/Searchbar';
import { IconButton } from '@material-tailwind/react';
import { BagIcon, BarsIcon } from '~/components/Icons';
import DrawerCustom from '~/components/DrawerCustom';

const menuItems = ['EN (English)', 'VI (Vietnamese)'];

function Test() {
    var classes =
        'relative z-50 2xl:px-40 xl:px-32 lg:px-28 sm:px-8 h-32 top-0 py-1 flex items-center justify-between space-x-5 max-[640px]:space-x-2 bg-white shadow-md z-50 transition-colors ease-in';
    return (
        <div className="h-[2000px] relative">
            <header className="w-screen md:w-full fixed">
                <div className={classes}>
                    <Link to={config.routes.home} className="shrink-0 max-[640px]:hidden">
                        <img className="h-auto max-w-full w-36 z-50" src={images.logo} alt="VegFoLos" />
                    </Link>

                    <Searchbar />

                    <div className="inline-flex items-center space-x-3 shrink-0 lg:hidden">
                        <IconButton
                            ripple
                            className="rounded-full bg-light-surface-container-high"
                            variant="filled"
                            size="lg"
                        >
                            <BarsIcon />
                        </IconButton>
                    </div>
                    <div className="lg:inline-flex items-center space-x-3 shrink-0 hidden">
                        {false ? (
                            <Button title="Home" outline to={config.routes.home} />
                        ) : (
                            <Button title="News" outline to={config.routes.news} />
                        )}
                        <Button title="Login" outline />
                        {false ? (
                            <></>
                        ) : (
                            <DrawerCustom
                                ripple
                                variant="outlined"
                                className="rounded-full hover:bg-light-primary/8 "
                                icon={<BagIcon />}
                            />
                        )}
                        <DropdownMenu menuItems={menuItems} title="EN" />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Test;
