import { EllipseIcon, LotusIcon, StarIcon, TimeIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

function RestaurantCard({ data }) {
    return (
        <Link to={`/@${data.title}`} state={{ data }}>
            <div className="w-64 min-w-64 hover:shadow-[0_1px_3px_1px_rgba(0,0,0,0.3),_0_1px_2px_0_rgba(0,0,0,0.3)]  dark:hover:shadow-[0_1px_3px_1px_rgba(255,255,255,0.3),_0_1px_2px_0_rgba(255,255,255,0.3)] rounded-xl">
                <img className="w-full h-28 object-cover rounded-t-xl" src={data.img} alt={data.alt} />
                <div className="p-2 text-light-on-surface dark:text-dark-on-surface bg-light-surface-container-lowest dark:bg-dark-surface-container-lowest rounded-b-xl">
                    <div className="flex space-x-2 h-12">
                        {data.trusted && <LotusIcon />}
                        <p className="uppercase text-ellipsis">{data.title}</p>
                    </div>
                    <div className="flex space-x-2 my-3">
                        {data.tags &&
                            data.tags.map((tag, index) => (
                                <Button
                                    className=" text-light-on-surface-variant dark:text-dark-on-surface-variant truncate px-2"
                                    title={`#${tag}`}
                                    text
                                    key={index}
                                />
                            ))}
                    </div>
                    <div className="flex justify-between pt-3">
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
                </div>
            </div>
        </Link>
    );
}

export default RestaurantCard;
