import images from '~/assets/img';
import classNames from 'classnames/bind';
import styles from './Icons.module.scss';

const cx = classNames.bind(styles);
export const LotusIcon = () => (
    <img className="w-6 h-6 flex-shrink-0 bg-light-secondary-container" src={images.lotusIcon} alt="Lotus icon" />
);
export const LotusIcon2 = () => <img className="w-6 h-6 flex-shrink-0" src={images.lotusIcon2} alt="Lotus icon" />;

export const StarIcon = () => <img className="w-6 h-6 flex-shrink-0" src={images.starIcon} alt="Star icon" />;
export const TimeIcon = () => <img className="w-6 h-6 flex-shrink-0" src={images.timeIcon} alt="Time icon" />;
export const EllipseIcon = () => <img className="w-1 h-1 flex-shrink-0" src={images.ellipseIcon} alt="Ellipse icon" />;

export const CustomArrowIcon = (props) => {
    const { className, style, onClick } = props;
    return <div className={cx(className, 'slick-prev', 'slick-next')} style={{ ...style }} onClick={onClick} />;
};
