import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faBars,
    faBookBookmark,
    faChevronDown,
    faCircleInfo,
    faGear,
    faHouse,
    faLanguage,
    faLocationDot,
    faMagnifyingGlass,
    faMinus,
    faMoneyBill,
    faMoon,
    faPlus,
    faStar,
    faSun,
    faTrash,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Icons.module.scss';

import images from '~/assets/img';
import { faBookmark, faClock, faCreditCard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
export const LotusIcon = () => (
    <img
        className="w-6 h-6 flex-shrink-0 bg-light-secondary-container dark:bg-dark-secondary-container rounded"
        src={images.lotusIcon}
        alt="Lotus icon"
    />
);
export const LotusIcon2 = () => (
    <img className="w-6 h-6 flex-shrink-0 text-light-primary" src={images.lotusIcon2} alt="Lotus icon" />
);

export const StarIcon = () => (
    <FontAwesomeIcon icon={faStar} className="w-6 h-6 text-light-primary dark:text-dark-primary" />
);

export const SettingIcon = () => (
    <FontAwesomeIcon className="w-6 h-6 text-light-primary dark:text-dark-primary" icon={faGear} />
);
export const TimeIcon = () => (
    <FontAwesomeIcon className="w-6 h-6 text-light-primary dark:text-dark-primary" icon={faClock} />
);
export const EllipseIcon = () => <img className="w-1 h-1 flex-shrink-0" src={images.ellipseIcon} alt="Ellipse icon" />;

export const CustomLeftArrowIcon = (props) => {
    const { className, style, onClick } = props;
    return <div className={cx(className, 'slick-prev')} style={{ ...style }} onClick={onClick} />;
};

export const CustomRightArrowIcon = (props) => {
    const { className, style, onClick } = props;
    return <div className={cx(className, 'slick-next')} style={{ ...style }} onClick={onClick} />;
};

export const LocationIcon = () => (
    <FontAwesomeIcon
        className="w-6 h-6 text-light-on-surface-variant dark:text-dark-on-surface-variant"
        icon={faLocationDot}
    />
);

export const BagIcon = ({ className }) => (
    <FontAwesomeIcon
        icon={faBagShopping}
        className={`w-6 h-6 text-light-primary dark:text-dark-primary ${className}`}
    />
);

export const BarsIcon = () => (
    <FontAwesomeIcon
        icon={faBars}
        className="w-6 h-6 text-light-on-surface-variant dark:text-dark-on-surface-variant"
    />
);
export const BookMarkOutlineIcon = () => (
    <FontAwesomeIcon icon={faBookmark} className="w-6 h-6 text-light-on-surface dark:text-dark-on-surface" />
);

export const BookMarkFilledIcon = () => (
    <FontAwesomeIcon icon={faBookBookmark} className="w-6 h-6 text-light-on-surface dark:text-dark-on-surface" />
);

export const HomeIcon = () => (
    <FontAwesomeIcon icon={faHouse} className="w-6 h-6 text-light-on-surface dark:text-dark-on-surface" />
);

export const PlusIcon = ({ className: customClassName }) => {
    customClassName?.split(' ');
    return (
        <FontAwesomeIcon
            icon={faPlus}
            className={`w-6 h-6 text-light-on-primary dark:text-dark-on-primary ${customClassName}`}
        />
    );
};

export const MinusIcon = ({ className: customClassName }) => {
    customClassName?.split(' ');
    return (
        <FontAwesomeIcon
            icon={faMinus}
            className={`w-6 h-6 text-light-on-primary dark:text-dark-on-primary ${customClassName}`}
        />
    );
};

export const CloseIcon = () => (
    <FontAwesomeIcon
        icon={faXmark}
        className="w-6 h-6 text-light-on-surface-variant dark:text-dark-on-surface-variant"
    />
);

export const DeleteIcon = ({ color = '#ffffff' }) => (
    <FontAwesomeIcon icon={faTrash} className="w-6 h-6 text-light-error dark:text-dark-error" />
);

export const FacebookIcon = ({ width = '24px', height = '24px' }) => (
    <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            fill="#1877F2"
            d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
        />
        <path
            fill="#ffffff"
            d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
        />
    </svg>
);

export const GoogleIcon = ({ width = '24px', height = '24px' }) => (
    <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            fill="#4285F4"
            d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
        />
        <path
            fill="#34A853"
            d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
        />
        <path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z" />
        <path
            fill="#EA4335"
            d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
        />
    </svg>
);

export const InfoIcon = ({ className = 'w-6 h-6' }) => (
    <FontAwesomeIcon icon={faCircleInfo} className={`${className} text-light-on-surface dark:text-dark-on-surface`} />
);

export const CreditCardIcon = ({ color }) => (
    <FontAwesomeIcon
        icon={faCreditCard}
        className="w-6 h-6 text-light-on-surface-variant dark:text-dark-on-surface-variant"
    />
);

export const CashIcon = ({ color = '#ffffff' }) => (
    <FontAwesomeIcon
        icon={faMoneyBill}
        className="w-6 h-6 text-light-on-surface-variant dark:text-dark-on-surface-variant"
    />
);

export const SearchIcon = ({ className }) => (
    <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`w-6 h-6 text-light-on-surface-variant dark:text-dark-on-surface-variant ${className}`}
    />
);

export const MoonIcon = ({ color }) => (
    <FontAwesomeIcon icon={faMoon} className="w-6 h-6 text-light-on-surface dark:text-dark-on-surface" />
);

export const SunIcon = ({ color }) => (
    <FontAwesomeIcon icon={faSun} className="w-6 h-6 text-light-on-surface dark:text-dark-on-surface" />
);

export const ChevronDownIcon = ({ color }) => (
    <FontAwesomeIcon icon={faChevronDown} className="w-6 h-6 text-light-on-surface dark:text-dark-on-surface" />
);

export const LanguageIcon = ({ color }) => (
    <FontAwesomeIcon icon={faLanguage} className="w-6 h-6 text-light-on-surface dark:text-dark-on-surface" />
);
