import { useState } from 'react';
import { Menu, MenuHandler, MenuList, Button, MenuItem, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '~/config';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function DropdownMenu({ variant = 'outlined', title, menuItems, className: customClassName }) {
    const [openMenu, setOpenMenu] = useState(false);

    var classes =
        'inline-flex h-10 px-5 py-2 justify-center items-center rounded-full text-sm gap-2 font-medium text-light-primary border border-light-outline hover:bg-light-primary/8';
    if (customClassName) {
        classes += ` ${customClassName}`;
    }
    return (
        <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
                <Button variant={variant} className={classes}>
                    {title}
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? 'rotate-180' : ''}`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="hidden w-full max-w-64 max-h-96 gap-3 overflow-visible lg:grid">
                <ul className="flex w-full flex-col gap-1 hover:outline-none">
                    {menuItems.map((item, index) => (
                        <Link to={config.routes.home} key={index} className="w-full">
                            <MenuItem className="bg-light-surface-container-lowest hover:bg-light-tertiary-container transition-colors ">
                                <Typography className="text-light-on-surface hover:text-light-on-tertiary-container">
                                    {item}
                                </Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </ul>
            </MenuList>
        </Menu>
    );
}

export default DropdownMenu;
