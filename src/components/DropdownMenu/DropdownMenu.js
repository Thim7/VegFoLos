import { useState } from 'react';
import { Menu, MenuHandler, MenuList, MenuItem, IconButton, Switch } from '@material-tailwind/react';
import { ChevronDownIcon, LanguageIcon, MoonIcon, SettingIcon, SunIcon } from '../Icons';
import { useEffect } from 'react';

function DropdownMenu({ menuItems, title }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(() => {
        return JSON.parse(localStorage.getItem('isLightTheme') || true);
    });

    const handleSwitchClick = () => {
        setIsLightTheme(!isLightTheme);
    };

    useEffect(() => {
        var root = document.getElementsByTagName('html')[0];

        if (isLightTheme === true) {
            localStorage.setItem('isLightTheme', JSON.stringify(true));
            root.classList.remove('dark');
        } else {
            localStorage.setItem('isLightTheme', JSON.stringify(false));
            root.classList.add('dark');
        }
    }, [isLightTheme]);
    return (
        <Menu>
            <MenuHandler>
                <IconButton
                    className="rounded-full border-light-primary dark:border-dark-primary hover:bg-light-primary/8 dark:hover:bg-dark-primary/8"
                    variant="outlined"
                >
                    <SettingIcon color="#235b2f" />
                </IconButton>
            </MenuHandler>
            <MenuList className="bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest w-1/5 overflow-hidden">
                <Menu placement="right-start" open={openMenu} handler={setOpenMenu} allowHover offset={15}>
                    <MenuHandler className="flex items-center justify-between">
                        <MenuItem className="hover:!bg-light-tertiary-container dark:hover:!bg-dark-tertiary-container hover:!text-light-on-tertiary-container dark:hover:!text-dark-on-tertiary-container">
                            <div className="flex items-center space-x-1 ">
                                <LanguageIcon />
                                <span className="text-light-on-surface dark:text-dark-on-surface ">{title}</span>
                            </div>
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`size-6 transition-transform ${openMenu ? 'rotate-90' : ''}`}
                            />
                        </MenuItem>
                    </MenuHandler>
                    <MenuList className="bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest">
                        {menuItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                className="text-light-on-surface dark:text-dark-on-surface hover:!bg-light-tertiary-container dark:hover:!bg-dark-tertiary-container hover:!text-light-on-tertiary-container dark:hover:!text-dark-on-tertiary-container"
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
                <MenuItem
                    onClick={handleSwitchClick}
                    className="text-light-on-surface dark:text-dark-on-surface inline-flex justify-between items-center w-full"
                >
                    <div className="flex items-center space-x-1">
                        {isLightTheme ? <SunIcon /> : <MoonIcon />}
                        <span>Switch theme</span>
                    </div>
                    <Switch defaultChecked={isLightTheme} />
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default DropdownMenu;
