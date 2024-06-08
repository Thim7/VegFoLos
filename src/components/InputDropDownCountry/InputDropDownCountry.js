import { useState } from 'react';
import { useCountries } from 'use-react-countries';
import { Input, Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';

export default function InputDropDownCountry() {
    const { countries } = useCountries();
    const [country, setCountry] = useState(0);
    const { name, flags, countryCallingCode } = countries[country];

    return (
        <div className="relative flex w-full">
            <Menu placement="bottom-start">
                <MenuHandler>
                    <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="flex h-12 items-center gap-2 rounded-r-none border border-r-0 border-light-outline dark:border-dark-outline bg-light-surface-container-low dark:bg-dark-surface-container-lowest text-light-on-surface dark:text-dark-on-surface pl-3"
                    >
                        <img src={flags.svg} alt={name} className="h-4 w-4 rounded-full object-cover" />
                        {countryCallingCode}
                    </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem] z-40 bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest">
                    {countries.map(({ name, flags, countryCallingCode }, index) => {
                        return (
                            <MenuItem
                                key={name}
                                value={name}
                                className="flex items-center gap-2 text-light-on-surface dark:text-dark-on-surface hover:!bg-light-tertiary-container dark:hover:!bg-dark-tertiary-container hover:!text-light-on-tertiary-container dark:hover:!text-dark-on-tertiary-container"
                                onClick={() => setCountry(index)}
                            >
                                <img src={flags.svg} alt={name} className="h-5 w-5 rounded-full object-cover" />
                                {name} <span className="ml-auto">{countryCallingCode}</span>
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Menu>
            <Input
                type="tel"
                placeholder="Mobile Number"
                className=" rounded-l-none !border-light-outline dark:!border-dark-outline text-light-on-surface dark:text-dark-on-surface"
                labelProps={{
                    className: 'before:content-none after:content-none',
                }}
                containerProps={{
                    className: 'h-12 min-w-0',
                }}
            />
        </div>
    );
}
