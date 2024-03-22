import { useState } from 'react';
import { Menu, MenuHandler, MenuList, Button, MenuItem, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '~/config';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const menuItems = ['EN (English)', 'VI (Vietnamese)'];
function DropdownMenu() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
                <Button
                    variant="outlined"
                    className="inline-flex h-10 px-5 py-2 justify-center items-center rounded-full text-sm gap-2 font-medium text-light-primary border border-light-outline hover:bg-light-primary/8"
                >
                    EN
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? 'rotate-180' : ''}`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="hidden w-full max-w-64 max-h-96 gap-3 overflow-visible lg:grid">
                <ul className="flex w-full flex-col gap-1">
                    {menuItems.map((item) => (
                        <Link to={config.routes.home} className="w-full">
                            <MenuItem>
                                <Typography className="text-light-on-surface">{item}</Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </ul>
            </MenuList>
        </Menu>
    );
}

export default DropdownMenu;
