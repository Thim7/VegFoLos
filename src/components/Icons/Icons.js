import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Icons.module.scss';

import images from '~/assets/img';

const cx = classNames.bind(styles);
export const LotusIcon = () => (
    <img
        className="w-6 h-6 flex-shrink-0 bg-light-secondary-container rounded"
        src={images.lotusIcon}
        alt="Lotus icon"
    />
);
export const LotusIcon2 = () => <img className="w-6 h-6 flex-shrink-0" src={images.lotusIcon2} alt="Lotus icon" />;

export const StarIcon = () => <img className="w-6 h-6 flex-shrink-0" src={images.starIcon} alt="Star icon" />;
export const TimeIcon = () => <img className="w-6 h-6 flex-shrink-0" src={images.timeIcon} alt="Time icon" />;
export const EllipseIcon = () => <img className="w-1 h-1 flex-shrink-0" src={images.ellipseIcon} alt="Ellipse icon" />;

export const CustomLeftArrowIcon = (props) => {
    const { className, style, onClick } = props;
    return <div className={cx(className, 'slick-prev')} style={{ ...style }} onClick={onClick} />;
};

export const CustomRightArrowIcon = (props) => {
    const { className, style, onClick } = props;
    return <div className={cx(className, 'slick-next')} style={{ ...style }} onClick={onClick} />;
};

export const LocationIcon = () => <FontAwesomeIcon className="w-6 h-6 text-light-on-surface" icon={faLocationDot} />;

export const BookMarkOutlineIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-light-on-surface"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
    </svg>
);

export const BookMarkFilledIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="light-on-surface" className="w-6 h-6">
        <path
            fillRule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
            clipRule="evenodd"
        />
    </svg>
);

export const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="light-on-surface">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);
